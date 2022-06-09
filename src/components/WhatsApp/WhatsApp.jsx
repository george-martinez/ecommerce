import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined'
import WhatsappRoundedIcon from '@mui/icons-material/WhatsappRounded'
import WhatsappTwoToneIcon from '@mui/icons-material/WhatsappTwoTone';
import WhatsappSharpIcon from '@mui/icons-material/WhatsappSharp'
import { Button } from "@mui/material";
import './WhatsApp.css'

const storePhoneNumber = '541126507716' /* Include country code */

const WhatsApp = () => {
    return (
        <a className="whatsapp-icon-box" href={`https://api.whatsapp.com/send?phone=${storePhoneNumber}`} target="_blank" rel="noreferrer">
            <WhatsAppIcon 
                sx={
                    {
                        fontSize: '40px',
                        position: 'sticky'
                    }
                }
            >
            </WhatsAppIcon>
        </a>
    )
}

export default WhatsApp

/* 
    bottom: 10px;
    right: 10px;
    margin-right: -100vw;
    
    background-color: #fff;
    border-radius: 50%;
    color: #32b345;
    width: 200px;
*/