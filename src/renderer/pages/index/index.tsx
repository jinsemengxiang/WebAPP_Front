import React  from 'react';
import icon from '../../../../assets/icon.svg';
// 引入该目录下的css
import './index.scss'
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import request from '../../api';
function Hello() {

  // 跳转
  const navigate = useNavigate();

  //跳转页面函数
  const goToNext = () => {
    //跳转到Login
    if (1 != 1) {
      //报错
      console.log('报错')
    }else{
      console.log('进来了')
      request('POST', '/postTest', {'username':'tcw571852573','password':'123456'}).then(res  => console.log(res));
      // if (res.data == true){
      //   // 跳转
      // }{
      //   // 提示，用户名或密码错误
      // }
      navigate('/login')
    }
  }

  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
      <Button onClick={goToNext}>
        跳转
      </Button>
      <Button type="primary" block>
        Primary
      </Button>
      <Button type="dashed" block>
        Dashed
      </Button>
    </div>
  );
}

export default Hello;
