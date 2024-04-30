import { EventEmitter } from "@angular/core"

export class UserService{
    users = [
        {name : "Sirisha", job : "Software Developer", gender:"Female",age : 21,Country:"india", profile : "assets/img1.jpg"},
        {name : "Sirish", job : "Teacher", gender:"Male",age : 22,Country:"india", profile : "assets/img3.webp"},
        {name : "Sree", job : "Doctor", gender:"Female",age : 24,Country:"US", profile : "assets/img2.jpg"},
        {name : "SriRam", job : "Designer", gender:"Male",age : 23,Country:"Koria", profile : "assets/img4.jpg"}
    ]

    OnshowDetailsClicked = new EventEmitter<{name : string, job : string, gender:string, age : number, Country:string, profile : string}>();

    ShowDetailsView(user : {name : string, job : string, gender:string, age : number, Country:string, profile : string}){
        this.OnshowDetailsClicked.emit(user)
    }

}