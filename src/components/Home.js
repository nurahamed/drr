import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Table, Button, Stack } from "react-bootstrap";
export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <h3>DRR</h3>
        <ProductConsumer>
          {(value) => {
            return (
              <Table size="sm" varient="dark" striped bordered hover>
                <tbody>
                  <tr>
                    <th>Title</th>
                    <th>Information</th>
                    <th>Company</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="text"
                        value={value.title}
                        onChange={(e) => value.updateValue(e, "title")}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={value.info}
                        onChange={(e) => value.updateValue(e, "info")}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={value.price}
                        onChange={(e) => value.updateValue(e, "price")}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={value.company}
                        onChange={(e) => value.updateValue(e, "company")}
                      />
                    </td>
                    <td>
                      <Button size="sm" variant="success" onClick={()=>(value.onSave(value.id))}> {value.id ? "save" : "Add"}</Button>
                    </td>
                  </tr>

                  {value.Alldata.map((product) => {
                    return (
                      <tr>
                        <td>{product.title}</td>
                        <td>{product.info}</td>
                        <td>{product.company}</td>
                        <td>{product.price}</td>

                        <td>
                          <Stack direction="horizontal" gap={2}>
                            <Button
                              size="sm"
                              variant="primary"
                              onClick={() => value.onEdit(product.id)}
                            >
                              Edit
                            </Button>

                            <Button
                              size="sm"
                              variant="danger"
                              onClick={() => value.onDelete(product.id)}
                            >
                              Delete
                            </Button>
                          </Stack>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}
