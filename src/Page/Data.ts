import { Person } from "./interface";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import egypt from "../assets/egypt.svg";
import qatar from "../assets/qatar.svg";
import saudi from "../assets/saudi-arabia.svg";
export let person: Person[];
person = [
  {
    id: 1,
    name: "محمد مصطفي علي",
    img: person1,
    position: "عضو خارجي",
    flag: egypt,
    isInner:false,
    country:"مصر"
  },
  {
    id: 2,
    name: "اسامة مجاهد",
    img: person2,
    position: "عضو خارجي",
    flag: qatar,
    isInner:false,
    country:"قطر"
  },
  {
    id: 3,
    name: "احمد الناواوي",
    img: person3,
    position: "عضو داخلي",
    flag: saudi,
    isInner:true,
    country:"السعودية"
  },
  {
    id: 4,
    name: "شريف خالد",
    img: person4,
    position: "عضو داخلي",
    flag: saudi,
    isInner:true,
    country:"السعودية"
  },
  {
    id: 5,
    name: "سيف ياسر",
    img: person4,
    position: "عضو داخلي",
    flag: saudi,
    isInner:true,
    country:"السعودية"
  },
];
