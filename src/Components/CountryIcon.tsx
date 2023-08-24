import { Gb } from 'react-flags-select'
import { Nl } from 'react-flags-select';
import { Mx } from 'react-flags-select';
import { Au } from 'react-flags-select';
import { Es } from 'react-flags-select';
import { Fr } from 'react-flags-select';
import { Ca } from 'react-flags-select';
import { De } from 'react-flags-select';
import { Mc } from 'react-flags-select';
import { Jp } from 'react-flags-select';
import { Fi } from 'react-flags-select';
import { Cn } from 'react-flags-select';
import { Dk } from 'react-flags-select';
import { Ph } from 'react-flags-select';

const CountryIcon = ({country}: {country: string}) => {
  switch (country) {
     case "GB":
        return <Gb />;
     case "NL":
        return <Nl />;
     case "MX":
        return <Mx />;
     case "AU":
        return <Au />;
     case "ES":
        return <Es />;
     case "FR":
        return <Fr />;
     case "CA":
        return <Ca />;
     case "DE":
        return <De />;
     case "MC":
        return <Mc />;
     case "JP":
        return <Jp />;
     case "FI":
        return <Fi />;
     case "CN":
        return <Cn />;
     case "DK":
        return <Dk />;
     case "PH":
        return <Ph />;
     default:
        return null;
  }
}

export default CountryIcon