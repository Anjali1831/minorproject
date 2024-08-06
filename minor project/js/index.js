let regform = document. querySelector(".register-form");
let allinput=regform.querySelectorAll("input");
let regList = document.querySelector(".reg-list");

let allregdata=[];

if(localStorage.getItem("allregdata") != null)
{
    allregdata= JSON.parse(localStorage.getItem("allregdata"));
}
console.log(allregdata);

    regform.onsubmit= (e) =>{
        e.preventDefault();
        allregdata.push({
            name:allinput[0].value,
           department: allinput[1].value,
           DOB:allinput[2].value,
           mobile:allinput[3].value
        });
        localStorage.setItem("allregdata",JSON.stringify(allregdata));
        swal ("Data Inserted","Successfully","success");
    }
const getregdata = () =>{
    regList.innerHTML = "";
    allregdata.forEach((data,index) =>{
        let dataStr=JSON.stringify(data);
        regList.innerHTML += `
        <tr>
        <td>${index+1}</td>
        <td>${data.Regno}</td>
        <td>${data.name}</td>
        <td>${data.department}</td>
        <td>${data.DOB}</td>
        <td>${data.mobile}</td>
        <td>
        <button data = "${index}" class=" edit-btn btn p-1 px-2 btn-primary">
        <i class="fa fa-edit"></i>
        </button>
        <button index ="${index}" class=" del-btn btn p-1 px-2 btn-danger">
                <i class="fa fa-trash"></i>
</button>
</td>
</tr>
        `;
    });
    action();
    }

    //delete coding
    const action = () =>{
        let allDelBtn = regList.querySelectorAll(".del-btn");
        for(let btn of allDelBtn)
        {
            btn.onclick = () =>{
let index = btn.getAttribute("index");
alert(index);
allregdata.splice(index,3);
localStorage.setItem("allregdata",JSON.stringify(allregdata))
getregdata();
            }
            }
        }
//let confirm
const confirm = () =>{
    return new Promise((resolve,reject)=>{
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this  file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,

        })
        .then((willDelete) => {
            if (willDelete) {
                resolve(true);
                swal(" file has been deleted!", {
                    icon: "success",
                });
            } else {
                reject(false);
                swal("file is safe!");
            }
        });


}

)}
//update coding
let allEditBtn = regList.querySelectorAll(".edit-btn");
for(let btn of allEditBtn)
{
    btn.onclick = () =>{
        let index = btn.getAttribute("index");
        let datastr = btn.getAttribute("data");
  console.log(data);
        addBtn.click();
    }
}

getregdata();



