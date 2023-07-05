import React from "react";
import styles from "./members.module.css";
import { person } from "./Data";

const Members: React.FC = () => {
  return (
    <div className={styles.members}>
      {person.map((per) => (
        <div key={per.id} className={styles.member}>
          <div className={styles.member_img}>
            <img src={per.img} alt="person" />
            <img src={per.flag} alt="person" />
          </div>
          <div className={styles.member_data}>
            <h2>{per.name}</h2>
            <h3>منصب العضو هنا</h3>
            <p className={`${per.isInner ? styles.innerMember : ""}`}>
              ({per.position})
            </p>
            <div className={styles.member_data_CountryFlag}>
            <p>{per.country}</p>
              <img src={per.flag} alt="person" />
            
            </div>
          </div>
          <div className={styles.member_btns}>
            <button>تفاصيل</button>
            <button>محادثة</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Members;
