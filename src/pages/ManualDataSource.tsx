import { FunctionComponent } from "react";
import SectionDataSourceinfo from "../components/SectionDataSourceinfo";
import TableHeader from "../components/TableHeader";
import styles from "./ManualDataSource.module.css";

const ManualDataSource: FunctionComponent = () => {
  return (
    <form className={styles.manualDatasource}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <p className={styles.title}>Manual DataSource</p>
        </div>
        <div className={styles.iconbutton}>
          <img className={styles.icon} loading="lazy" alt="" src="/icon.svg" />
        </div>
      </div>
      <div className={styles.hr} />
      <SectionDataSourceinfo />
      <TableHeader />
      <div className={styles.templatesNameValueActions}>
        <div className={styles.name}>
          <div className={styles.value}>John</div>
        </div>
        <div className={styles.string}>
          <div className={styles.value1}>Programmer</div>
        </div>
        <div className={styles.actions}>
          <div className={styles.add}>
            <img className={styles.buttonIcon} alt="" src="/button@2x.png" />
          </div>
          <div className={styles.iconbutton1}>
            <img className={styles.buttonIcon1} alt="" src="/button@2x.png" />
          </div>
          <div className={styles.delete}>
            <img className={styles.buttonIcon2} alt="" src="/button@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.templatesNameValueActions1}>
        <div className={styles.name1}>
          <div className={styles.value2}>Sam</div>
        </div>
        <div className={styles.string1}>
          <div className={styles.cellValue}>Designer</div>
        </div>
        <div className={styles.actions1}>
          <div className={styles.add1}>
            <img className={styles.buttonIcon3} alt="" src="/button@2x.png" />
          </div>
          <div className={styles.remove}>
            <img className={styles.buttonIcon4} alt="" src="/button@2x.png" />
          </div>
          <div className={styles.delete1}>
            <img className={styles.buttonIcon5} alt="" src="/button@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.bottomActions}>
        <div className={styles.ghostbutton}>
          <img
            className={styles.icon1}
            loading="lazy"
            alt=""
            src="/buttons--button-icon@2x.png"
          />
          <div className={styles.label}>Item</div>
        </div>
        <button className={styles.button}>
          <div className={styles.buttonFrame}>
            <div className={styles.title1}>Save</div>
          </div>
        </button>
      </div>
    </form>
  );
};

export default ManualDataSource;
