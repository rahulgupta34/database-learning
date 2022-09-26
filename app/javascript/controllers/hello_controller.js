import { Controller } from "@hotwired/stimulus"
import { get, post } from "@rails/request.js"
export default class extends Controller {

  static targets = ["toID","fromID","nameField","closeDismiss","to","from","name","loadFilter","category","categorySpan"]

  static values = {
    url: String,
    filterUrl: String
  }

  connect() {
    get(this.urlValue,{
      responseKind: "turbo-stream"
    })
  }

  searchFilter(){
    this.postRequest()
  }

  async postRequest(){
    let response = await post(this.filterUrlValue,{
      responseKind: "turbo-stream",
      body: JSON.stringify(
        {
          to: this.toIDTarget.value,
          from: this.fromIDTarget.value,
          name: this.nameFieldTarget.value,
          category: this.categoryTarget.value
        }
      )
    })
    if(response.ok){
      this.dismiss()
      if(this.toIDTarget.value != ""){
        this.toTarget.innerHTML = "<span>To: " + this.toIDTarget.value + "  <button id='closeBtn' data-action='click->hello#removeSearchParams'>X</button></span>"
      }
      if(this.fromIDTarget.value != ""){
        this.fromTarget.innerHTML = "<span>From: " + this.fromIDTarget.value + "  <button id='closeBtn' data-action='click->hello#removeSearchParams'>X</button></span>"
      }
      if(this.nameFieldTarget.value != ""){
        this.nameTarget.innerHTML = "<span>Name: " + this.nameFieldTarget.value + "  <button id='closeBtn' data-action='click->hello#removeSearchParams'>X</button></span>"
      }
      if(this.categoryTarget.value != ""){
        this.categorySpanTarget.innerHTML = "<span>Category: " + this.categoryTarget.value + "  <button id='closeBtn' data-action='click->hello#removeSearchParams'>X</button></span>"
      }
    }
  }

  dismiss(){
    this.closeDismissTarget.click()
  }

  removeSearchParams(event){
    if(event.target.closest("span").innerText.includes("From")){
      event.target.closest("span").remove()
      this.fromIDTarget.value = ""
      this.loadFilterTarget.click()
    }else if(event.target.closest("span").innerText.includes("To")){
      event.target.closest("span").remove()
      this.toIDTarget.value = ""
      this.loadFilterTarget.click()
    }else if(event.target.closest("span").innerText.includes("Category")){
      event.target.closest("span").remove()
      this.categoryTarget.value = ""
      this.loadFilterTarget.click()
    }else{
      event.target.closest("span").remove()
      this.nameFieldTarget.value = ""
      this.loadFilterTarget.click()
    }
  }

}
