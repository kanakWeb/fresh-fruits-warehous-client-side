import React from "react";
import "./Blog.css";

const Blogs = () => {
  return (
    <div className="blog-top margin-bottom w-100 h-100 bg-blogs container">
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2
            className="accordion-header"
            id="panelsStayOpen-headingOne"
          >
            <button
              className="accordion-button bg-info"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Difference between Javascript and Node.JS -
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              <h5>Javascript</h5>
              <ul>
                <li>
                  It is an open-source, cross-platform, interpreted,
                  lightweight scripting programming language that is
                  used to develop dynamic and web applications
                </li>
                <li>
                  It is a programming language. It works in any
                  browser that has a proper browser engine.
                </li>
                <li>
                  It is generally used on the client-side server.
                </li>
                <li>
                  All the JavaScript is not important to the node
                  community.
                </li>
                <li>
                  JavaScript can be run on any engine, including
                  Spider Monkey, V8, and JavaScript Core.
                </li>
              </ul>
              <h5>Node.JS</h5>
              <ul>
                <li>
                  It is a cross-platform, open-source JavaScript
                  runtime environment that allows JavaScript to be run
                  on the server.
                </li>
                <li>
                  It's a JavaScript interpreter and environment with
                  some valuable libraries that JavaScript programming
                  can use separately.
                </li>
                <li>It is generally used on the server-side.</li>
                <li>
                  All node projects represent the JavaScript
                  community.
                </li>
                <li>
                  Node JS is only supported by the V8 engine, which
                  Google Chrome mostly uses. Any JavaScript program
                  written with Node JS will always be run in the V8
                  engine.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2
            className="accordion-header"
            id="panelsStayOpen-headingTwo"
          >
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
             When should you use nodejs and when should you use mongodb?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">The MongoDB Node.js Driver allows you to easily interact with MongoDB databases from within Node.js applications.
              Node.js and MongoDB are two different technologies used
              for two different purposes. Node.js is a server-side
              development platform whereas MongoDB is a database. So,
              the answer to this question can be split into two parts:
              1. The difference between Node.js and MongoDB 
              2. Node.js with MongoDB. The first one is very simple. If you want
              to develop a web application that runs on a server, then
              using Node.js is a great choice. It's very fast,
              lightweight and easy to learn. On the other hand, if you
              want to store data, you should use MongoDB, which is a
              document-based database. It's fast and flexible and
              allows you to store, search and sort your data in many
              different ways.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2
            className="accordion-header"
            id="panelsStayOpen-headingThree"
          >
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
             Differences between Sql and NoSql databases -
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
             <h5>Sql</h5>
             <ul>
                 <li>Databases are categorized as Relational Database Management System</li>
                 <li>SQL databases have fixed or static or predefined schema.</li>
                 <li>SQL databases display data in form of tables so it is known as table-based database.</li>
                 <li>QL databases are vertically scalable</li>
                 <li>SQL databases are not best suited for hierarchical data storage.</li>
             </ul>
             <h5>NoSql</h5>
             <ul>
                 <li>NoSQL databases are categorized as Non-relational or distributed database system.</li>
                 <li>NoSQL databases have dynamic schema.</li>
                 <li> tables so it is known as table-based database.	NoSQL databases display data as collection of key-value pair, documents, graph databases or wide-column stores.</li>
                 <li>NoSQL databases are horizontally scalable.</li>
                 <li>NoSQL databases are best suited for hierarchical data storage.</li>
                 
             </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
