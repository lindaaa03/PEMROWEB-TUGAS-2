function createForm() {
  const linda = document.getElementById("linda");

  linda.style.backgroundColor = " rgba(213, 85, 198, 0.5);";
  linda.style.borderRadius = "8px";
  linda.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.8)";
  linda.style.padding = "20px";
  linda.style.maxWidth = "600px";
  linda.style.margin = "20px auto";

  const form = document.createElement("div");
  form.style.display = "flex";
  form.style.flexDirection = "column";
  form.style.gap = "10px";

  form.innerHTML = `

    <h3 style="text-align: center; color: black; text-shadow: 0 0 2px #fff, 0 0 3px #fff;">Input Data Mahasiswa</h3>
    
    <div style="display: flex; align-items: center; justify-content: space-between;">
        <label for="no" style="width: 20%; font-weight: bold; color: black; ">No:</label>
        <input type="text" id="no" name="no" style="width: 75%; padding: 10px; border: 2px solid rgb(214, 29, 122); border-radius: 4px;">
    </div>
    
    <div style="display: flex; align-items: center; justify-content: space-between;">
        <label for="nim" style="width: 20%; font-weight: bold; color: black;">NIM:</label>
        <input type="text" id="nim" name="nim" style="width: 75%; padding: 10px; border: 2px solid rgb(214, 29, 122); border-radius: 4px;">
    </div>
    
    <div style="display: flex; align-items: center; justify-content: space-between;">
        <label for="nama" style="width: 20%; font-weight: bold; color: black;">Nama:</label>
        <input type="text" id="nama" name="nama" style="width: 75%; padding: 10px; border: 2px solid rgb(214, 29, 122); border-radius: 4px;">
    </div>
    
    <div style="display: flex; align-items: center; justify-content: space-between;">
        <label for="prodi" style="width: 20%; font-weight: bold; color: black;">Prodi:</label>
        <input type="text" id="prodi" name="prodi" style="width: 75%; padding: 10px; border: 2px solid rgb(214, 29, 122); border-radius: 4px;">
    </div>
    
    <div style="display: flex; align-items: center; justify-content: space-between;">
        <label for="kelas" style="width: 20%; font-weight: bold; color: black;">Kelas:</label>
        <input type="text" id="kelas" name="kelas" style="width: 75%; padding: 10px; border: 2px solid rgb(214, 29, 122); border-radius: 4px;">
    </div>
    
    <button id="submitBtn" style="width: 100%; padding: 12px; background-color: rgb(214, 29, 122); color: black; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; margin-top: 15px; transition: background-color 0.3s;">Submit</button>
    <hr style="width: 100%; border-color: rgb(214, 29, 122);">`;

  linda.appendChild(form);

  const table = document.createElement("table");
  table.setAttribute("border", "1");
  table.style.width = "100%";
  table.style.borderCollapse = "collapse";
  table.style.marginTop = "20px";

  table.innerHTML = `
        <thead>
            <tr style="background-color: rgb(214, 29, 122); color: white;">
                <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">No</th>
                <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">NIM</th>
                <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Nama</th>
                <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Prodi</th>
                <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Kelas</th>
            </tr>
        </thead>
        <tbody id="tableBody"></tbody>
    `;

  linda.appendChild(table);

  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("mouseover", () => {
    submitBtn.style.backgroundColor = "rgb(214, 29, 122)";
  });
  submitBtn.addEventListener("mouseout", () => {
    submitBtn.style.backgroundColor = "rgb(245, 48,147)";
  });

  submitBtn.addEventListener("click", addToTable);
}

function addToTable() {
  const no = document.getElementById("no").value;
  const nim = document.getElementById("nim").value;
  const nama = document.getElementById("nama").value;
  const prodi = document.getElementById("prodi").value;
  const kelas = document.getElementById("kelas").value;

  if (no && nim && nama && prodi && kelas) {
    const tableBody = document.getElementById("tableBody");
    const row = document.createElement("tr");

    row.style.backgroundColor =
      tableBody.children.length % 2 === 0 ? "#e1f5fe" : "#ffffff";
    row.style.border = "1px solid #ddd";
    row.style.padding = "12px";
    row.addEventListener("mouseover", () => {
      row.style.backgroundColor = "#b3e5fc";
    });
    row.addEventListener("mouseout", () => {
      row.style.backgroundColor =
        tableBody.children.length % 2 === 0 ? "#e1f5fe" : "#ffffff";
    });

    row.innerHTML = `
            <td style="padding: 12px; border: 1px solid #ddd;">${no}</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${nim}</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${nama}</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${prodi}</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${kelas}</td>
        `;

    tableBody.appendChild(row);

    document.getElementById("no").value = "";
    document.getElementById("nim").value = "";
    document.getElementById("nama").value = "";
    document.getElementById("prodi").value = "";
    document.getElementById("kelas").value = "";
  } else {
    alert("Please fill in all fields!");
  }
}

createForm();
