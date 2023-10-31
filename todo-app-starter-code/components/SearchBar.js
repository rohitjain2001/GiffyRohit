import React from 'react';
import styles from "./search.module.css";

const SearchBar = ({ searchQuery, setSearchQuery, onSearch }) => {
    return (
        <div className={styles.search}>
          <div className={styles.searchModule}>
            <div className={styles.searchComponents}>
              <div className={styles.searchBox}>
              <input
            type="text"
            placeholder="Article name or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
                {/* <div className={styles.articleNameOr}>
                  Article name or keywords...
                </div> */}
              </div>
              <div className={styles.button}>
              <button className={styles.search1} onClick={onSearch}>Search</button>
              </div>
            </div>
          </div>
        </div>
      );
};

export default SearchBar;
