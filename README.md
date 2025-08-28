
### 1.The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
---

- **getElementById** Get The HTML Specified Element with a unique ID name
- **getElementsByClassName** Get The HTML Specified Element with a unique Class Name
- **querySelector** Useing a CSS selector , Get first match Element
- **querySelectorAll** Useing a CSS selector , Get a Nodelist of All matches element

---

### 2.create and insert a new element into the DOM
---
- **First you need to create an element then you need to change the text inside the element and then add it as a child of any HTML element : for example**

```bash
    const e = document.createElement("Id name");
    e.innerText = "inner text insert here";
    document.getElementById("parent id name").appendChild(e);
```

---



