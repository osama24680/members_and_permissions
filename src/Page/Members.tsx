import React from "react";
import styles from "./members.module.css";
import { person } from "./Data";
import search from "../assets/search.svg";
import filter from "../assets/filter.svg";
import white_plus from "../assets/white_plus.svg";
const Members: React.FC = () => {
  return (
    <>
      <div className={styles.heading}>
        <div className={styles.mobile_view}>
          <h2 className={styles.headingText_Mobile}>الأعضاء والصلاحيات</h2>
          <div className={styles.headingSearch_Btn_Mobile}>
            <div className={styles.headingSearch_Btn_Mobile_button}>
              <button><img src={white_plus} alt="plus" /></button>
            </div>
            <div className={styles.headingSearch_Btn_Mobile_input}>
              <input type="text" placeholder="ابحث هنا..." dir="rtl"/>
              <img src={search} alt="search"  className={styles.searchImage} />
              <img src={filter} alt="search" className={styles.filterImage}  />
            </div>
          </div>
        </div>

        <div className={styles.web_view}>
          <div className={styles.members_left}>
            <button>add a new member</button>
          </div>
          <div className={styles.heading_right}>
            <h2>Members and Persmissions</h2>
            <div className={styles.members_dropdown}></div>
          </div>
        </div>
      </div>

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
    </>
  );
};

export default Members;
