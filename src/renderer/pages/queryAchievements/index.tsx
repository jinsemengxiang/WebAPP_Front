import React from "react";
import { Input } from "antd";
import "./index.scss";

const { Search } = Input;

const QueryAchievements: React.FC = () => {

  const onSearch = (value: string) => console.log(value);

  return (
    <div className='queryAchievements-container'>
      <Search
        placeholder="请输入召唤师昵称"
        allowClear
        enterButton="查询"
        size="large"
        onSearch={onSearch}
        className="queryAchievements-container-search"
      />
      <div className="queryAchievements-container-search">
        历史搜索：
        {
          // indicates very long content
          Array.from({ length: 5 }, (_, index) => (
              <a href="#">&nbsp;九亿少女夢&nbsp;</a>
          ))
        }
      </div>
    </div>
  );
}

export default QueryAchievements;
