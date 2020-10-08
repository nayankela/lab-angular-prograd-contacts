import { contacts } from "./../contact";
import { userContact } from "./../userContact";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.css"],
})
export class ContactListComponent implements OnInit {
  contacts: userContact[];
  newContact: any = {};
  newContactName = "";
  newContactEmail = "";
  newContactphoneNumber = "";
  newContactImage = "";
  constructor() {}

  ngOnInit() {
    // initialize your contacts here
    this.contacts = contacts;
  }

  addContact(newContact): any {
    console.log("Add contact has been called");
    // Fill your code here
    newContact = {
      name: this.newContactName,
      email: this.newContactEmail,
      phoneNumber: this.newContactphoneNumber,
      image: this.newContactImage,
    };
    // add contact to contacts list
    // clear inputs
    console.log(newContact);
    console.log(this.contacts);
    this.contacts.unshift(newContact);
  }
}
