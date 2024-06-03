import { FunctionComponent } from "react";
import styles from "./NormalDataSource.module.css";

export type NormalDataSourceType = {
  className?: string;
};

const NormalDataSource: FunctionComponent<NormalDataSourceType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.normalDatasource, className].join(" ")}>
      <div className={styles.component1dataType5}>
        <div className={styles.title}>
          <div className={styles.titleInner}>
            <div className={styles.frameParent}>
              <div className={styles.titletextWrapper}>
                <div className={styles.titletext}>
                  <div className={styles.title1}>User Data DataSource</div>
                </div>
              </div>
              <img className={styles.closeIcon} alt="" src="/close.svg" />
            </div>
          </div>
          <div className={styles.borderbottom} />
        </div>
        <div className={styles.vanityMetrics}>
          <div className={styles.metrics}>
            <div className={styles.teams}>
              <div className={styles.title2}>DataSource Name</div>
              <div className={styles.input}>
                <div className={styles.placeholder}>DataSource.name</div>
              </div>
            </div>
            <div className={styles.teamsWLibraries}>
              <div className={styles.title3}>Data Type</div>
              <div className={styles.optionMenu}>
                <div className={styles.optionMenu1}>
                  <div className={styles.dataTypesText}>
                    <img className={styles.textIcon} alt="" src="/text.svg" />
                    <div className={styles.dataTypesTextChild} />
                  </div>
                  <div className={styles.optionMenu2}>
                    <div className={styles.flex}>
                      <div className={styles.value}>String</div>
                      <img className={styles.icon} alt="" src="/@2x.png" />
                    </div>
                  </div>
                </div>
                <img className={styles.hoverIcon} alt="" src="/hover.svg" />
                <img className={styles.icon1} alt="" src="/@2x.png" />
              </div>
              <div className={styles.title4}>2</div>
            </div>
          </div>
        </div>
        <div className={styles.tableHeaderDefaultSorting}>
          <div className={styles.name}>
            <div className={styles.name1}>Name</div>
            <img
              className={styles.caretDownIcon}
              alt=""
              src="/16--caretdown.svg"
            />
          </div>
          <div className={styles.value1}>
            <div className={styles.value2}>Value</div>
            <img
              className={styles.caretDownIcon1}
              alt=""
              src="/16--caretdown.svg"
            />
          </div>
          <div className={styles.tableHeaderDefaultSortingChild} />
          <div className={styles.actions} />
        </div>
        <div className={styles.templatesNameValueActions}>
          <div className={styles.name2}>
            <div className={styles.value3}>String</div>
          </div>
          <div className={styles.string}>
            <div className={styles.cellValue}>String value</div>
          </div>
          <div className={styles.actions1}>
            <div className={styles.add}>
              <img className={styles.buttonIcon} alt="" src="/button@2x.png" />
            </div>
            <div className={styles.remove}>
              <img className={styles.buttonIcon1} alt="" src="/button@2x.png" />
            </div>
            <div className={styles.delete}>
              <img className={styles.buttonIcon2} alt="" src="/button@2x.png" />
            </div>
          </div>
        </div>
        <div className={styles.templatesNameValueActions1}>
          <div className={styles.name3}>
            <div className={styles.value4}>String</div>
          </div>
          <div className={styles.string1}>
            <div className={styles.cellValue1}>String value</div>
          </div>
          <div className={styles.actions2}>
            <div className={styles.add1}>
              <img className={styles.buttonIcon3} alt="" src="/button@2x.png" />
            </div>
            <div className={styles.remove1}>
              <img className={styles.buttonIcon4} alt="" src="/button@2x.png" />
            </div>
            <div className={styles.delete1}>
              <img className={styles.buttonIcon5} alt="" src="/button@2x.png" />
            </div>
          </div>
        </div>
        <div className={styles.bottomActions}>
          <div className={styles.buttonsButton20}>
            <img
              className={styles.buttonsButtonIcon}
              alt=""
              src="/buttons--button-icon@2x.png"
            />
            <div className={styles.createVariable}>Create variable</div>
          </div>
          <div className={styles.button}>
            <div className={styles.buttonFrame}>
              <div className={styles.title5}>Save</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NormalDataSource;
