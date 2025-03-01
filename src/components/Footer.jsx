import { useContext } from 'react';
import { AuthorContext } from './AuthorContext';

export default function Footer(){
  //const deets = useContext(AuthorContext);
  const {name,version, fxn}= useContext(AuthorContext);

    return <>
     <footer className="border-top">
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-7">
          <ul className="list-inline text-center">
            <li className="list-inline-item">
              <a href="#!">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-twitter fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#!">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#!">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-github fa-stack-1x fa-inverse" />
                </span>
              </a>
            </li>
          </ul>
          <div className="small text-center text-muted fst-italic">
            Copyright © Remote Class.{version} Developed by {name}  2025
          </div>
        </div>
      </div>
    </div>
  </footer></>
}