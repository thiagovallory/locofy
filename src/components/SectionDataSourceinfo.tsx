import { FunctionComponent } from "react";
import "antd/dist/antd.min.css";
import { Select } from "antd";
import styles from "./SectionDataSourceinfo.module.css";

export type SectionDataSourceinfoType = {
  className?: string;
};

const SectionDataSourceinfo: FunctionComponent<SectionDataSourceinfoType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.sectiondatasourceinfo, className].join(" ")}>
      <div className={styles.fieldset}>
        <div className={styles.title}>DataSource Name</div>
        <input
          className={styles.inputTypetext}
          placeholder="DataSource.name"
          type="text"
        />
      </div>
      <div className={styles.fieldset1}>
        <div className={styles.labelFortype}>Data Type</div>
        <Select
          className={styles.select}
          virtual={true}
          showArrow={false}
        >{` `}</Select>
      </div>
    </section>
  );
};

export default SectionDataSourceinfo;
