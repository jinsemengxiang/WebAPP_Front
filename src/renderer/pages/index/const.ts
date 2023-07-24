import {
  BarChartOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";
import React from "react";
import QueryAchievements from "../queryAchievements";
import AutomaticBP from "../automaticBP";
import PersonalizedHomepage from "../personalizedHomepage";
import HeroesStatistics from "../heroesStatistics";

const items = [
  {
    key: "1",
    icon: React.createElement(UserOutlined),
    title: "战绩查询",
    path: "/queryAchievements",
    component: React.createElement(QueryAchievements)
  },
  {
    key: "2",
    icon: React.createElement(VideoCameraOutlined),
    title: "自动BP",
    path: "/automaticBP",
    component: React.createElement(AutomaticBP)
  },
  {
    key: "3",
    icon: React.createElement(UploadOutlined),
    title: "个性化主页",
    path: "/personalizedHomepage",
    component: React.createElement(PersonalizedHomepage)
  },
  {
    key: "4",
    icon: React.createElement(BarChartOutlined),
    title: "全英雄数据统计",
    path: "/heroesStatistics",
    component: React.createElement(HeroesStatistics)
  }
]

export default items;
