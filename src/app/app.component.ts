import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  a = 0;
  b = 0;
  item = {
    nama: "kelengkeng",
    harga: 10000
  };
  crypto = [
    {
      nama: "Cardano",
      harga: 13000
    },
    {
      nama: "LiteCoin",
      harga: 2700000
    }
  ];
  tampil: boolean = false;
  pesan = "";
  itemArr = [1, 2, 3, 4];
  OPEN() {
    this.pesan = "button is clicked";
    alert("DIBUKA");
  }

  value = "";
  onKey(event: any) {
    this.value += event.target.value + " | ";
  }
}
