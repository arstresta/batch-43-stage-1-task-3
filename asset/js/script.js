function getData(){
    let name    = document.getElementById('nama').value
    let email   = document.getElementById('email').value
    let phone   = document.getElementById('phone').value
    let subject = document.getElementById('subject').value
    let message = document.getElementById('message').value
    let link = document.createElement('a')
    link.href = `mailto:${email}?subject=${subject}&body=Hallo nama saya ${name}, ${message}, silahkan kontak nomor saya di ${phone}`
    link.click()

    let student = {
        name,
        email,
        phone,
        subject,
        message
    }

    console.log(student)
    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(subject)
    console.log(message)
}