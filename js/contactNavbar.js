const contactNavbarStyle = document.createElement("style");

contactNavbarStyle.innerHTML = `
  .work-request-placeholder {
    width: 154px;
    min-height: 42px;
    display: block;
    justify-self: end;
    pointer-events: none;
    visibility: hidden;
  }

  @media (max-width: 1000px) {
    .work-request-placeholder {
      display: none;
    }
  }
`;

document.head.appendChild(contactNavbarStyle);
