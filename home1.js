

const list = document.getElementById("transationList")
const form = document.getElementById("transitionForm")
const about = document.getElementsByClassName(".describe").value
const amount = document.getElementsByClassName(".amount").value
const btn = document.getElementsByClassName(".submiBtn")

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const li = document.createElement("li")
    li.innerHTML = about;
    li.innerHTML = amount;

    list.append(li);
})







