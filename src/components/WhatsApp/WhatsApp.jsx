import WhatsAppIcon from "@mui/icons-material/WhatsApp"
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