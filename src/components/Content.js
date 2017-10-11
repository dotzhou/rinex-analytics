import React from 'react'
import scriptLoader from 'react-async-script-loader'
import '../_styles/Content.css'

var stations = [
['00NA',-12.46664,130.84398,4, true],
['01NA',-12.47823,130.98204,4, true],
['02NA',-12.35593,130.88172,4, true],
['20NA',-23.69819,133.88275,4, true],
['21NA',-23.76698,133.87921,4, true],
['ALBY',-34.95023,117.81018,4, true],
['ALIC',-23.67012,133.88551,4, true],
['ANDA',-30.45329,137.16009,4, true],
['ARD2',-30.52088,151.67468,4, true],
['ARMC',-22.95682,145.24545,4, true],
['ARUB',-31.80912,125.92435,4, true],
['BALA',-32.46078,123.86805,4, true],
['BARR',-34.56418,150.85834,4, true],
['BBOO',-32.81035,136.05866,4, true],
['BDLE',-37.75861,147.65602,4, true],
['BDST',-27.99,153,4, true],
['BDVL',-25.90043,139.34791,4, true],
['BEE2',-27.72,153.2,4, true],
['BING',-32.41178,151.65233,4, true],
['BKNL',-31.99630,141.47010,4, false],
['BMAN',-31.10633,138.70702,4, true],
['BNDY',-24.90823,152.32100,4, true],
['BRLA',-16.05452,136.30226,4, true],
['BRO1',-18.00398,122.20908,4, true],
['BROC',-36.03141,144.20401,4, true],
['BULA',-22.91355,139.90306,4, true],
['BUR2',-41.05007,145.91485,4, true],
['BURA',-30.52553,117.17464,4, true],
['CAS1',-66.28336,110.51968,4, true],
['CBLA',-26.67133,150.34036,4, true],
['CBLT',-27.08,152.95,4, true],
['CEDU',-31.86667,133.809883,4, true],
['CKIS',-21.20102,-159.80061,4, false],
['CLEV',-27.53,153.27,4, true],
['CLYT',-37.91400,145.12899,4, true],
['CNBN',-31.33332,149.26957,4, true],
['COBG',-37.73949,144.97354,4, true],
['COCO',-12.18835,96.83397,4, true],
['COEN',-13.95877,143.17670,4, true],
['COOL',-26.74211,145.68033,4, true],
['CRAN',-38.10799,145.28692,4, true],
['DALB',-27.17,151.26,4, true],
['DARW',-12.84371,131.13274,4, true],
['DAV1',-68.57732,77.97261,4, true],
['DPRT',-41.17861,146.34962,4, true],
['ECOR',-34.37562,150.91081,4, true],
['EDSV',-25.37581,151.11978,4, true],
['ERMG',-26.71222,143.26230,4, true],
['ESPA',-33.87433,121.89432,4, true],
['EXMT',-21.96068,114.11337,4, true],
['FLND',-40.21439,148.24158,4, true],
['FROY',-18.12597,125.80045,4, true],
['GABO',-37.56813,149.91520,4, true],
['GASC',-24.63264,115.33861,4, true],
['GATT',-27.54,152.33,4, true],
['GGTN',-18.30597,143.54063,4, true],
['GLB2',-34.74641,149.71114,4, true],
['GNGN',-35.18496,149.13053,4, true],
['HERN',-30.32663,152.48686,4, true],
['HIL1',-31.82553,115.73858,4, true],
['HNIS',-10.59038,142.29621,4, true],
['HOB2',-42.80472,147.43873,4, true],
['HUGH',-20.94744,144.20446,4, true],
['HYDN',-32.44939,118.89187,4, true],
['IHOE',-32.86415,143.49206,4, true],
['JAB2',-12.66016,132.89453,4, true],
['JERV',-22.86054,136.10066,4, true],
['JLCK',-20.66928,141.73899,4, true],
['KALG',-30.37508,121.45925,4, true],
['KARR',-20.98144,117.09719,4, true],
['KAT1',-14.37601,132.15327,4, true],
['KAT2',-14.37508,132.15250,4, true],
['KELN',-31.62233,117.70263,4, true],
['KGIS',-39.94186,143.84707,4, true],
['KILK',-26.08423,152.25206,4, true],
['KIRI',1.35458,172.92288,4, true],
['KIRR',-34.04335,151.07305,4, true],
['KUNU',-15.67697,128.76262,4, true],
['LAMB',-26.93862,134.06293,4, true],
['LARR',-15.57317,133.21275,4, true],
['LAUT',-17.60881,177.44658,4, true],
['LIAW',-41.90227,146.67308,4, true],
['LILY',-41.25163,147.21475,4, true],
['LKYA',-12.45548,130.82472,4, true],
['LONA',-28.87844,120.31905,4, true],
['LORD',-31.51989,159.06120,4, true],
['LURA',-15.57752,144.45697,4, true],
['MAC1',-54.49952,158.93583,4, true],
['MAIN',-14.04621,134.09287,4, true],
['MAJU',7.11915,171.36451,4, true],
['MAW1',-67.60476,62.87071,4, true],
['MCHL',-26.35891,148.15496,4, true],
['MEDO',-26.75740,114.60954,4, true],
['MNGO',-38.77980,143.65172,4, true],
['MOBS',-37.82942,144.97534,4, true],
['MRBA',-17.01796,145.32383,4, true],
['MRO1',-26.69665,116.63748,4, true],
['MTCV',-25.94570,133.20670,4, true],
['MTDN',-22.13281,131.49272,4, true],
['MTEM',-37.58763,143.44890,4, true],
['MTIS',-20.69041,139.48642,4, true],
['MTMA',-28.11533,117.84309,4, true],
['MULG',-30.28198,134.05857,4, true],
['NAUR',-0.55172,166.92554,4, true],
['NBRK',-29.67716,145.81403,4, false],
['NCLF',-34.70838,116.12326,4, true],
['NEBO',-21.64029,148.69855,4, true],
['NHIL',-36.30842,141.64601,4, true],
['NIUM',-19.07652,-169.92707,4, true],
['NMTN',-17.67169,141.06916,4, true],
['NORF',-29.04335,167.93883,4, true],
['NORS',-32.26003,121.78723,4, true],
['NSTA',-29.04555,150.44410,4, true],
['NTJN',-21.45725,133.97004,4, true],
['PARK',-32.99877,148.26461,4, true],
['PERT',-31.80197,115.88525,4, true],
['PNGM',-2.04322,147.36600,4, true],
['POHN',6.95994,158.21010,4, true],
['PRCE',-35.36358,149.08899,4, true],
['PTHL',-20.53976,118.67885,4, true],
['PTKL',-34.47555,150.91369,4, true],
['PTLD',-38.34440,141.61347,4, true],
['PTSV',-35.09471,138.48571,4, true],
['PTVL',-17.74942,168.31502,4, true],
['RAVN',-33.59675,120.07088,4, true],
['RHPT',-41.06513,145.96184,4, true],
['RIVN',-17.71161,129.99220,4, false],
['RKLD',-19.96763,137.83479,4, true],
['RNSP',-18.38789,133.81653,4, true],
['ROBI',-28.08,153.38,4, true],
['RSBY',-23.16100,150.79008,4, true],
['SA45',-32.47029,137.93432,4, true],
['SAMO',-13.84920,-171.73842,4, false],
['SOLO',-9.43491,159.95434,4, true],
['SPBY',-42.54645,147.93085,4, true],
['STHG',-24.35026,143.28528,4, true],
['STNY',-38.37516,145.21403,4, true],
['STR1',-35.31617,149.01005,4, true],
['STR2',-35.31617,149.01015,4, true],
['SYDN',-33.78088,151.15037,4, true],
['SYM1',-35.34252,149.16106,4, true],
['TBOB',-29.45017,142.05742,4, true],
['THEV',-32.12863,133.69682,4, true],
['TID1',-35.39921,148.98000,4, true],
['TITG',-10.58651,142.22195,4, true],
['TMBO',-24.77171,146.28409,4, true],
['TOMP',-22.84646,117.40030,4, true],
['TONG',-21.14471,-175.17921,4, true],
['TOOG',-27.08,152.37,4, false],
['TOOW',-27.53445,151.92845,4, true],
['TOW2',-19.26929,147.05568,4, true],
['TURO',-36.03515,150.12219,4, true],
['TUVA',-8.52528,179.19655,4, true],
['UCLA',-31.67959,128.88315,4, true],
['WAGN',-33.33305,117.41009,4, true],
['WALH',-17.77636,135.64327,4, true],
['WARA',-25.03721,128.2917,4, true],
['WARW',-28.21,152.03,4, true],
['WBEE',-37.90615,144.66854,4, true],
['WEND',-37.53776,143.83021,4, true],
['WILU',-26.62568,120.21836,4, true],
['WLAL',-19.77862,120.64349,4, true],
['WMGA',-19.93337,134.35452,4, true],
['WOOL',-27.48496,153.03526,4, true],
['WWLG',-33.70344,147.32168,4, true],
['XMIS',-10.44997,105.68849,4, true],
['YAR2',-29.04656,115.334902,4, true],
['YAR3',-29.04656,115.34715,4, true],
['YARR',-29.04660,115.34697,4, true],
['YEEL',-34.14415,135.78437,4, true],
['YELO',-31.29070,119.64579,4, true],
['YULA',-25.23106,130.94156,4, true]
      ];


function setMarkers(map) {

   for (var i = 0; i < stations.length; i++) {
     var site = stations[i];
     if (site[4]) { 
       new window.google.maps.Marker({
         position: {lat: site[1], lng: site[2]},
         map: map,
         icon: { path: window.google.maps.SymbolPath.CIRCLE,
                strokeColor: '#292',
                fillColor: '#292',
                fillOpacity: 0.5,
                strokeOpacity: 0.5,
                offset: '0%',
                scale: 2  },
         title: site[0],
         zIndex: site[3]
       });
     } else {
       new window.google.maps.Marker({
         position: {lat: site[1], lng: site[2]},
         map: map,
         icon: { path: window.google.maps.SymbolPath.CIRCLE,
                strokeColor: '#F00',
                fillColor: '#F00',
                fillOpacity: 0.5,
                strokeOpacity: 0.5,
                offset: '0%',
                scale: 2.2  },
         title: site[0],
         zIndex: site[3]
     });
    }
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.map = null;
  }

  componentWillReceiveProps ({isScriptLoaded, isScriptLoadSucceed}) {
    if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
      if (isScriptLoadSucceed) {
        this.map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: -25.854885, lng: 134.3548055},
          zoom: 2  
        });
        setMarkers(this.map);
      } else {
        alert("script not loaded")
      }
    }
  }

  render() {
    return (
      <div id="map" className="container">
      </div>
    )
  }
}

export default scriptLoader(
    ["https://maps.googleapis.com/maps/api/js?key=AIzaSyCZfdopaFa7cctFnEWxT-2NElXXUzdDvWI"]
)(Content)

