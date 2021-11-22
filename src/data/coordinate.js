import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import PhoneIcon from '@mui/icons-material/Phone';
import WebIcon from '@mui/icons-material/Web'

export const contact = [
  {
    icon: <AlternateEmailIcon />,
    type: "text",
    target: "email",
    label: "e-mail",
    default: "gerant.proprietaire"
  },
  {
    icon: <AlternateEmailIcon />,
    type: "text",
    target: "visibleEmail",
    label: "e-mail (visible)"
  },
  {
    icon: <LockOpenIcon />,
    type: "password",
    target: "password",
    label: "Mot de passe"
  },
  {
    icon: <LockOpenIcon />,
    type: "password",
    target: "passwordConfirm",
    label: "Confirmation du Mot de passe"
  },
  {
    icon: <StorefrontIcon />,
    type: "text",
    target: "name",
    label: "Nom du commerce"
  },
  {
    icon: <AddLocationAltIcon />,
    type: "text",
    target: "adress",
    label: "Adresse"
  },
  {
    icon: <AddLocationAltIcon />,
    type: "text",
    target: "visibleAdress",
    label: "Adresse (visible)"
  },
  {
    icon: <PhoneIcon />,
    type: "number",
    target: "phone",
    label: "Telephone"
  },
  {
    icon: <WebIcon />,
    type: "text",
    target: "webSite",
    label: "Web site"
  }
]