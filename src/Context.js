import React, { Component } from "react";
import { rowData } from "./appData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    Alldata: rowData,
    id: "",
    title: "",
    info: "",
    price: "",
    company: "",
    undateEdit: [],
  };

  // to get the existing data
  getRecord = (id) => {
    const product = this.state.Alldata.find((item) => item.id === id);
    return product;
  };
  // to edit get and set the existing data
  onEdit = (id) => {
    const tempProduct = this.state.Alldata;
    const index = tempProduct.indexOf(this.getRecord(id));
    const selectedRecord = tempProduct[index];
    this.setState({
      id: selectedRecord["id"],
      title: selectedRecord["title"],
      info: selectedRecord["info"],
      price: selectedRecord["price"],
      company: selectedRecord["company"],
    });
  };
  // for update
  updateValue = (e, test) => {
    if (test === "title") {
      this.state.title = e.target.value;
    }
    if (test === "info") {
      this.state.info = e.target.value;
    }
    if (test === "price") {
      this.state.price = e.target.value;
    }
    if (test === "company") {
      this.state.company = e.target.value;
    }
    const tempData = [this.state.id, this.state.title, this.state.info, this.state.price, this.state.company];

    this.setState({
        updateEdit : tempData
    })
  };

  // for save
  onSave = (id) => {
    if (id !== "") {
      const SavedRecord = this.state.Alldata;
      const index = SavedRecord.indexOf(this.getRecord(id));
      const Record = SavedRecord[index];
      Record['title'] =  this.state.updateEdit[1];
      Record['info'] =  this.state.updateEdit[2];
      Record['price'] =  this.state.updateEdit[3];
      Record['company'] =  this.state.updateEdit[4];
        this.setState({
            Alldata: [...this.state.Alldata], id: "", title: "", info: "", price: "", company:""
        })
    }
  };
  render() {
    console.log(this.state.Alldata);
    return (
      <div>
        <ProductContext.Provider value={{ ...this.state, onEdit: this.onEdit, updateValue :this.updateValue, onSave: this.onSave }}>
          {this.props.children}
        </ProductContext.Provider>
      </div>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
