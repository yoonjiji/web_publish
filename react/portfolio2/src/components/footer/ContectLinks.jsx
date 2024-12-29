import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function ContectLinks() {
  const contectList = [
    {
      href: "http://github.com",
      type: "github",
    },
    {
      href: "http://github.com",
      type: "linkedin",
    },
  ];
  return (
    <ul className="contact__links">
      {contectList &&
        contectList.map((item) => (
          <li>
            <a className="contact__link" href={item.href}>
              <i className="fa-brands fa-github"></i>
              {item.type === "github" && <FontAwesomeIcon icon={faGithub} />}
              {item.type === "linkedin" && (
                <FontAwesomeIcon icon={faLinkedinIn} />
              )}
            </a>
          </li>
        ))}
    </ul>
  );
}
