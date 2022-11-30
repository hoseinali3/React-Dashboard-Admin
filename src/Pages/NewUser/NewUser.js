import { LoadingButton } from '@mui/lab';
import { Alert, Avatar, Button, IconButton, Snackbar, Stack, TextareaAutosize, TextField } from '@mui/material'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import SaveIcon from '@mui/icons-material/Save';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import React, { useState } from 'react'
import useFetch from '../../Components/Hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import IronManAvarat from './../../images/ironman-avatar.jpg'
import './NewUser.css';
import swal from 'sweetalert';
export default function NewUser() {


  const [dates, setDates] = useState(dayjs('2022-08-18T21:11:54'))
  const [btnLoading, setBtnLoading] = useState(false)

  const [users, setUsers] = useFetch("http://localhost:4000/users2")

  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [address, setAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [desc, setDesc] = useState('')
  const [errUserName, setErrUserName] = useState(false)
  const [errEmail, setErrEmail] = useState(false)
  const [errPassword, setErrPassword] = useState(false)
  const [errPassword2, setErrPassword2] = useState(false)
  const [errAddress, setErrAddress] = useState(false)
  const [errPhoneNumber, setErrPhoneNumber] = useState(false)
  const [errDesc, setErrDesc] = useState(false)
  const [successAlert, setSuccessAlert] = useState(false)
  const [errorAlert, setErrorAlert] = useState(false)
  let navigate = useNavigate();

  const datesChangeHandler = (newValue) => {
    setDates(newValue);
  };


  const btnLoadingChange = () => {

    !username.length && setErrUserName(true)
    !email.length && setErrEmail(true)
    !address.length && setErrAddress(true)
    !password.length && setErrPassword(true)
    !password2.length && setErrPassword2(true)
    !phoneNumber.length && setErrPhoneNumber(true)


    setTimeout(() => {
      setErrUserName(false)
      setErrEmail(false)
      setErrPassword(false)
      setErrPassword2(false)
      setErrAddress(false)
      setErrPhoneNumber(false)
      setErrDesc(false)
    }, 4000);



    if (username.length && email.length && password.length && password2.length && phoneNumber.length) {


      if (password.length === password2.length) {
        setBtnLoading(true)

        const newUserObj = {
          id: users.length + 1,
          username,
          email,
          password,
          address,
          phoneNumber,
          desc
        }

        setTimeout(() => {
          // fetch("http://localhost:4000/users2", {
          //   method: "POST",
          //   body: JSON.stringify(newUserObj),
          //   headers: {
          //     "Content-Type": "application/json"
          //   }
          // })
          //   .then(res => res.json())
          //   .then(data => {
          //     data && swal("موفق!", "شما با موفقیت ثبت نام شدید!", "success", {
          //       button: {
          //         text: "باشه",
          //         value: true,
          //         visible: true,
          //         className: "",
          //         closeModal: true,
          
          //       }
          //     })
          //   })
          //   .catch(err => {
          //     err && swal("خطا!", "در ثبت نام مشکلی وجود دارد!", "error", {
          //       button: {
          //         text: "باشه",
          //         value: true,
          //         visible: true,
          //         className: "",
          //         closeModal: true
          //       }
          //     })
          //   })
          swal("موفق!", "شما با موفقیت ثبت نام شدید!", "success", {
                  button: {
                    text: "باشه",
                    value: true,
                    visible: true,
                    className: "",
                    closeModal: true
                  }
                })

          setUserName('')
          setEmail('')
          setPassword('')
          setPassword2('')
          setAddress('')
          setPhoneNumber('')
          setDesc('')


          setTimeout(() => {
            setErrorAlert(false)
            setBtnLoading(false)
            setSuccessAlert(false)
              
          }, 4000);

        }, 2000);

      }

    }
  }







  return (
    <div className='newUser-container'>

      <div className="input-fields">
        <h3 className='newUser-title'>کاربر جدید</h3>
        <Avatar src={IronManAvarat} className='newUser-avatar' />
        <div className='newUser-addPhoto'>

          <IconButton component="label">
            <AddToPhotosIcon color='primary' style={{ fontSize: "32px" }} />
            <input type="file" hidden multiple />
          </IconButton>
        </div>
        <TextField
          className='text-field'
          required
          id="outlined-required"
          label="نام کاربری"
          error={errUserName}
          value={username}
          onChange={event => setUserName(event.target.value)}
          inputProps={{ style: { fontFamily: "B-yekan" } }} InputLabelProps={{ style: { fontFamily: "B-yekan" } }}
        />
        <TextField
          className='text-field'
          required
          id="outlined-required"
          label="ایمیل"
          error={errEmail}
          value={email}
          onChange={event => setEmail(event.target.value)}
          placeholder='Example@gmail.com'
          inputProps={{ style: { fontFamily: "B-yekan" } }} InputLabelProps={{ style: { fontFamily: "B-yekan" } }}
        />

        <TextField
          className='text-field'
          inputProps={{ style: { fontFamily: "B-yekan" } }} InputLabelProps={{ style: { fontFamily: "B-yekan" } }}
          required
          id="outlined-required"
          label="رمز عبور"
          placeholder='*****'
          error={errPassword}
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <TextField
          className='text-field'
          inputProps={{ style: { fontFamily: "B-yekan" } }} InputLabelProps={{ style: { fontFamily: "B-yekan" } }}
          required
          id="outlined-required"
          label="تکرار رمز عبور"
          placeholder='*****'
          error={errPassword2}
          type="password"
          value={password2}
          onChange={event => setPassword2(event.target.value)}
        />
        <TextField
          className='text-field'
          value={address}
          inputProps={{ style: { fontFamily: "B-yekan" } }} InputLabelProps={{ style: { fontFamily: "B-yekan" } }}
          id="outlined-required"
          required
          label="آدرس"
          error={errAddress}
          onChange={event => setAddress(event.target.value)}
        />
        <TextField
          className='text-field'
          inputProps={{ style: { fontFamily: "B-yekan" } }} InputLabelProps={{ style: { fontFamily: "B-yekan" } }}
          required
          id="outlined-required"
          label="شماره همراه"
          placeholder='******0912'
          error={errPhoneNumber}
          value={phoneNumber}
          onChange={event => setPhoneNumber(event.target.value)}
        />





        <div className="newUser-save-container">
          <div className="newUser-divDesc">

            <TextareaAutosize
              className='newUser-desc'
              inputProps={{ style: { fontFamily: "B-yekan" } }} InputLabelProps={{ style: { fontFamily: "B-yekan" } }}
              value={desc}
              onChange={event => setDesc(event.target.value)}
              placeholder='توضیحات...'
            />
          </div>



          <div className="newUser-save">


            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DesktopDatePicker

                  label="تاریخ انتشار"

                  inputFormat="MM/DD/YYYY"
                  value={dates}
                  onChange={datesChangeHandler}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>

            <LoadingButton
              className='loading-saveBtn'
              color="primary"
              onClick={btnLoadingChange}
              loading={btnLoading}
              loadingPosition="start"
              startIcon={<SaveIcon />}
              variant="outlined"

            >
              ذخیره
            </LoadingButton>

            <Button className='cancelBtn' variant="outlined" onClick={() => navigate("/users")} color='error'>لغو</Button>

          </div>


        </div>




      </div>
      
    </div>
  )
}
