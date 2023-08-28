"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[902],{902:function(n,e,r){r.r(e),r.d(e,{default:function(){return C}});r(2791);var o,a,t,i,d,s,p,x=r(9434),m=r(5822),c=r(1438),l=r(6445),u=r(5705),h=r(8007),f=r(168),g=r(5706),w=g.Z.h1(o||(o=(0,f.Z)(["\n  padding: 12px 0;\n\n  font-size: 24px;\n  text-align: center;\n\n  @media (max-width: 1023.98px) {\n    padding: 10px 0;\n\n    font-size: 20px;\n  }\n\n  @media (max-width: 767.98px) {\n    padding: 8px 0;\n\n    font-size: 16px;\n  }\n"]))),b=(0,g.Z)(u.l0)(a||(a=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n  gap: 12px;\n  width: 420px;\n  padding: 8px;\n\n  border: 2px solid currentColor;\n  border-radius: 10px;\n\n  @media (max-width: 1023.98px) {\n    gap: 10px;\n    width: 320px;\n    padding: 6px;\n\n    border-radius: 8px;\n  }\n\n  @media (max-width: 767.98px) {\n    gap: 8px;\n    width: 220px;\n    padding: 4px;\n\n    border-radius: 6px;\n  }\n"]))),z=g.Z.label(t||(t=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 10px;\n\n  font-size: 20px;\n\n  @media (max-width: 1023.98px) {\n    gap: 6px;\n    margin-bottom: 8px;\n\n    font-size: 16px;\n  }\n\n  @media (max-width: 767.98px) {\n    gap: 4px;\n    margin-bottom: 6px;\n\n    font-size: 12px;\n  }\n"]))),Z=(0,g.Z)(u.gN)(i||(i=(0,f.Z)(["\n  width: 340px;\n  height: 24px;\n  padding-left: 12px;\n\n  font-size: 18px;\n  border: 1px solid currentColor;\n  border-radius: 10px;\n  color: inherit;\n  background-color: inherit;\n\n  &:hover {\n    background-color: var(--light-focus-color);    \n    color: #fff;\n  }\n\n  &:focus {   \n    background-color: var(--light-focus-color);\n    border-color: var(--light-focus-color);\n    color: #000;\n  }\n\n  @media (max-width: 1023.98px) {\n    width: 270px;\n    height: 20px;\n    padding-left: 10px;\n\n    font-size: 14px;\n    border-radius: 8px;\n  }\n\n  @media (max-width: 767.98px) {\n    width: 200px;\n    height: 16px;\n    padding-left: 8px;\n\n    font-size: 10px;\n    border-radius: 6px;\n  }\n"]))),v=(0,g.Z)(u.Bc)(d||(d=(0,f.Z)(["\n  margin: 0;\n\n  font-size: 14px;\n  color: red;\n\n  @media (max-width: 1023.98px) {\n    font-size: 12px;\n  }\n\n  @media (max-width: 767.98px) {\n    font-size: 10px;\n  }\n"]))),j=g.Z.button(s||(s=(0,f.Z)(["\n  height: 28px;\n\n  font-size: 18px;\n  text-transform: capitalize;  \n\n  border: 1px solid currentColor;\n  border-radius: 10px;\n  color: inherit;\n  background-color: inherit;\n  \n  &:hover,\n  &:focus {\n    background-color: #ff6b0a;\n    border-color: #ff6b0a;\n    color: #fff;\n  }\n\n  @media (max-width: 1023.98px) {\n    height: 24px;\n\n    font-size: 14px;\n\n    border-radius: 8px;\n  }\n\n  @media (max-width: 767.98px) {\n    height: 20px;\n\n    font-size: 10px;\n\n    border-radius: 5px;\n  }\n"]))),y=g.Z.div(p||(p=(0,f.Z)(["\n  margin: 0;\n\n  font-size: 14px;\n  color: red;\n\n  @media (max-width: 1023.98px) {\n    font-size: 12px;\n  }\n\n  @media (max-width: 767.98px) {\n    font-size: 10px;\n  }\n"]))),k=r(184),_=h.Ry().shape({name:h.Z_().min(2,"Too Short!").max(50,"Too Long!").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name is not valid!").trim().required("Required!"),email:h.Z_().min(5,"Too Short!").max(35,"Too Long!").email().matches(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,"Email is not valid!").trim().required("Required!"),password:h.Z_().min(5,"Too Short!").max(25,"Too Long!").matches(/(?=^.{5,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])|(?=.*[a-z]).*$/,"Password is not valid!").trim().required("Required!")}),A={name:"",email:"",password:""},C=function(){var n=(0,x.I0)(),e=(0,x.v9)(c.zh),r=(0,x.v9)(c.xU);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(w,{children:"Registration"}),(0,k.jsx)(u.J9,{initialValues:A,validationSchema:_,onSubmit:function(e){var r=e.name,o=e.email,a=e.password;n((0,m.z2)({name:r,email:o,password:a})),e.name="",e.email="",e.password=""},children:(0,k.jsxs)(b,{children:[(0,k.jsxs)(z,{htmlFor:"name",children:["Name",(0,k.jsx)(Z,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Please enter your Name."}),(0,k.jsx)(v,{name:"name",component:"p"})]}),(0,k.jsxs)(z,{htmlFor:"email",children:["Email",(0,k.jsx)(Z,{type:"text",name:"email",title:"Email must be digits and can contain spaces, dashes, parentheses and can ",placeholder:"Please enter your Email."}),(0,k.jsx)(v,{name:"email",component:"p"})]}),(0,k.jsxs)(z,{htmlFor:"password",children:["Password",(0,k.jsx)(Z,{type:"password",name:"password",title:"The password must be at least 1 lowercase or uppercase Latin letter, numbers, special characters. Total minimum 5 and maximum 25 characters",placeholder:"Please enter your Password."}),(0,k.jsx)(v,{name:"password",component:"p"})]}),(0,k.jsx)(j,{type:"submit",children:"Register"})]})}),r&&(0,k.jsx)(l.a,{}),e&&(0,k.jsx)(y,{children:"Ooops, something went wrong... Try a bit later or reload page"})]})}},1438:function(n,e,r){r.d(e,{Af:function(){return a},FT:function(){return p},M0:function(){return x},XQ:function(){return d},f6:function(){return s},xU:function(){return t},zh:function(){return i}});var o=r(6916),a=function(n){return n.contacts.items},t=function(n){return n.contacts.isLoading},i=function(n){return n.contacts.error},d=function(n){return n.filter},s=(0,o.P1)([a,d],(function(n,e){var r=e.toLowerCase().trim();return n.filter((function(n){return n.name.toLowerCase().includes(r)}))})),p=function(n){return n.contacts.editContact},x=function(n){return n.contacts.showModal}}}]);
//# sourceMappingURL=902.eed56858.chunk.js.map