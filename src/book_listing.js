class DummyBookList {
  constructor() {
    this.DummyBookListDetails = [
      {
        name: "Ctis",
        bookId: "0001",
        discription: "Basics on cloud",
        owner: "Manish",
        subject: "Ctis",
        Branch: "bca",
        year: 3,
        "uploadDate ": "12/09/22",
        uploadTime: "4am",
      },
      {
        name: "OS",
        bookId: "0002",
        discription: " operating System and processes",
        owner: "nithin",
        subject: "Operating System",
        Branch: "bca",
        year: 2,
        "uploadDate ": "01/09/22",
        uploadTime: "5pm",
      },
      {
        name: "sql",
        bookId: "0003",
        discription: "No-Sql",
        owner: "Manish",
        subject: "Sql",
        Branch: "bca",
        year: 3,
        "uploadDate ": "09/09/22",
        uploadTime: "6pm",
      },
      {
        name: "Ctis 2",
        bookId: "0004",
        discription: "Cloud techonolgy & Information security",
        owner: "Manish",
        subject: "Ctis",
        Branch: "bca",
        year: 3,
        "uploadDate ": "12/05/22",
        uploadTime: "4am",
      },
      {
        name: "Dbms",
        bookId: "0005",
        discription: "Database Management with MSQL ",
        owner: "samuel",
        subject: "dbms",
        Branch: "bca",
        year: 1,
        "uploadDate ": "12/07/22",
        uploadTime: "4am",
      },
      {
        name: "SystemBasics",
        bookId: "0006",
        discription: "system configuration and management",
        owner: "ken",
        subject: "System",
        Branch: "cse",
        year: 1,
        "uploadDate ": "12/09/22",
        uploadTime: "2pm",
      },
      {
        name: "english",
        bookId: "0007",
        discription: "ILTES Grammer",
        owner: "jhon",
        subject: "English",
        Branch: "bca",
        year: 2,
        "uploadDate ": "02/09/22",
        uploadTime: "5pm",
      },
      {
        name: "AI part 1",
        bookId: "0008",
        discription: "Artifical inteligence part 1",
        owner: "Manish",
        subject: "AI",
        Branch: "cse",
        year: 3,
        "uploadDate ": "10/01/22",
        uploadTime: "6pm",
      },
      {
        name: "dataScience",
        bookId: "0009",
        discription: "introductio to data-science",
        owner: "kenny",
        subject: "Ctis",
        Branch: "bca",
        year: 3,
        "uploadDate ": "12/05/22",
        uploadTime: "4am",
      },
      {
        name: "Dbms",
        bookId: "0010",
        discription: "Database Management System",
        owner: "samuel",
        subject: "Ctis",
        Branch: "bca",
        year: 1,
        "uploadDate ": "12/07/22",
        uploadTime: "4am",
      },
      {
        name: "java",
        bookId: "0011",
        discription: "Oops using java",
        owner: "jagan",
        subject: "java",
        Branch: "bca",
        year: 2,
        "uploadDate ": "16/09/22",
        uploadTime: "5pm",
      },
      {
        name: "python",
        bookId: "0012",
        discription: "python and web-applications",
        owner: "nithin",
        subject: "python",
        Branch: "bca",
        year: 2,
        "uploadDate ": "01/09/22",
        uploadTime: "7pm",
      },
      {
        name: "dataStructurs",
        bookId: "0013",
        discription: "data structure algorithms",
        owner: "Manish",
        subject: "Ctis",
        Branch: "bca",
        year: 3,
        "uploadDate ": "09/09/22",
        uploadTime: "6pm",
      },
      {
        name: "algebra and calculs",
        bookId: "0014",
        discription: "fundementals of maths",
        owner: "sam",
        subject: "Ctis",
        Branch: "bca",
        year: 1,
        "uploadDate ": "12/05/22",
        uploadTime: "12am",
      },
      {
        name: "Big-Data",
        bookId: "0015",
        discription: "BigData and learning process",
        owner: "danny",
        subject: "BigData and learning process",
        Branch: "bca",
        year: 2,
        "uploadDate ": "10/07/22",
        uploadTime: "3pm",
      },
    ];
  }
}
class BookListing {
  constructor() {
    this.bookList = new DummyBookList();
    this.loadBooks();
    this.attachEventListeners();
  }

  attachEventListeners() {
    const upload_button = document.querySelector(".upload_button");
    upload_button.addEventListener("click", this.openUploadScreen);
  }

  openUploadScreen() {
    const upload_section = document.querySelector(".upload_section");
    upload_section.style.display = "block";
  }

  loadBooks() {
    const newEl = this.getTemplate();
    const parentHolder = document.querySelector(".listing_section");
    const bookList = this.bookList.DummyBookListDetails;
    for (let i in bookList) {
      const [cover_image, title, subject] = newEl.querySelectorAll(
        ".cover_image, .title, .subject"
      );
      if (bookList[i].bookId)
        cover_image.setAttribute(
          "src",
          `./book_images/${bookList[i].bookId}.png`
        );
      title.innerText = bookList[i].discription;
      subject.innerText = bookList[i].subject;
      newEl.id = `test_${i}`;
      parentHolder.append(newEl.cloneNode(true));
    }
  }

  getTemplate() {
    const bookTemplate = `<div class="book_holder">
        <img class="cover_image"></img>
        <div class="title"></div>
        <div class="subject"></div>
      </div>`;
    const newEl = document.createElement("div");
    newEl.innerHTML = bookTemplate;
    return newEl;
  }
  closeUpload() {}
}

const bookListing = new BookListing();
