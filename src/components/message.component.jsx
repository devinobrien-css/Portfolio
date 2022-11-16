import { Icon } from "@iconify/react"
import { useState } from "react"
import { LabeledInput, LabeledTextArea, SectionSubTitle, SectionTitle } from "./custom.library"
import { Input } from "./prebuilt.library"



export const Messenger = () => {
    const [open,setOpen] = useState()
    const [sent,setSent] = useState()
    return (
        <>
            {open?(
                <div className="fixed top-0 w-full h-full bg-gray-700 flex flex-col items-center">
                    {sent?(
                        <div className="my-auto w-full">
                            <SectionTitle className={`text-center`}>Hey, Thanks for reaching out</SectionTitle>
                            <SectionSubTitle className={`text-center`}>I'll get back to you at my earliest convenience!</SectionSubTitle> 
                        </div>
                    ):(
                        <div className="my-auto w-full">
                            <SectionTitle className={`text-center`}>Send me a message</SectionTitle>
                            <Input className="bg-blue-300 w-1/5 mx-auto block" disabled />
                            <div className="md:w-1/2 mx-auto border rounded my-4 p-4 [&>*]:my-2">
                                <LabeledInput className="border rounded" placeholder="let me know who's there!">Name</LabeledInput>
                                <LabeledInput className="border rounded" placeholder="so I can get back to you!">Email</LabeledInput>
                                <LabeledTextArea className="border rounded" placeholder="hey Devin, " rows="5">Message</LabeledTextArea>
                                <button className="block mx-auto bg-blue-300 px-3 py-1 text-gray-700 hover:scale-105 rounded font-montserrat"
                                    onClick={()=>{
                                        setSent(true)
                                    }}
                                >send</button>
                            </div>
                        </div>
                    )}
                    <button className="fixed top-4 right-4 text-blue-300 hover:scale-105" 
                        onClick={()=>{
                            setOpen()
                            setSent()
                        }}
                    ><Icon icon="mdi:close-box" width="50" /></button>
                </div>
            ):(
                <div className="fixed bottom-1 right-1 scale-95 transform transition-all hover:scale-100 cursor-pointer" onClick={()=>setOpen(true)}>
                    <Icon icon="uim:comment-message" className="text-blue-400" width="50" />
                </div>
            )}
        </>
    )
}