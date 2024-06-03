import { FunctionComponent } from "react";
import styles from "./TableHeader.module.css";

export type TableHeaderType = {
  className?: string;
};

const TableHeader: FunctionComponent<TableHeaderType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.tableHeaderDefaultSorting, className].join(" ")}>
      <div className={styles.nameWrapper}>
        <div className={styles.name}>Name</div>
      </div>
      <img className={styles.caretDownIcon} alt="" src="/16--caretdown.svg" />
      <img className={styles.caretDownIcon1} alt="" src="/16--caretdown.svg" />
      <div className={styles.frameParent}>
        <div className={styles.valueWrapper}>
          <div className={styles.value}>Value</div>
        </div>
        <div className={styles.actions}>
          <div className={styles.actionsChild} />
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
