// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"wDWATS0hYWBj7CR4A/OumTxHFEPsdXP+9IbqNqrGLnI="},"public":{"type":"Buffer","data":"GRN8wGiUGo3kUWrY/cynZ5TV5lrQCTrxWN35toO3DgM="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"OPt6jYLU+qMum3mu5mbKRiL4tfswrfPzSxSG/4Ixm1k="},"public":{"type":"Buffer","data":"+6cY8GbAeevYnJX9uwqPnEVE8pBmVlXfKw3mqd7VeEk="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"iPAN554IrwSf1h3knyvjOliYi1x7RCBjfLboddmtJHc="},"public":{"type":"Buffer","data":"fMq0XmPHiGFU1oXWMx5qwVjwW8B7H0mZh2oTs+EOuWg="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"qFDkjU/RpNHK4InBMbDWwvHRgz+mjPwutoXqoKQ4i3E="},"public":{"type":"Buffer","data":"dWzY5TRvGFYAx/lWRXWPeiAtdwqzvaHi4ALONdAjOV4="}},"signature":{"type":"Buffer","data":"kPP86U905TzDoq8vgsUr/AbRuUoFX/QxF7f6PIGqRu8AIYgnrtcM5VNvXU8PZeRUhgSX8GlDPu7jLbymfvq2DQ=="},"keyId":1},"registrationId":167,"advSecretKey":"lW9WkwC/CPr+Spy4Lty1HhGNa2HEVx1ftsPYeYd+q4w=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"Bqt_2WHLQyeYnz-gcLd5gQ","phoneId":"220d3375-54b1-41ba-bafa-b5eaa92abffe","identityId":{"type":"Buffer","data":"meRmp1tSaKXy72qWY5e3OjfUS2o="},"registered":true,"backupToken":{"type":"Buffer","data":"ftMOUzCUXiSP8cyiKne25raygU0="},"registration":{},"pairingCode":"7VCGY5C2","me":{"id":"50941704602:68@s.whatsapp.net","lid":"71790848118806:68@lid"},"account":{"details":"CIGzgosBEJ+z3bcGGAEgACgA","accountSignatureKey":"xUo6twdr9S4wPjpwyOqzYwW4eCLO9AcdagpA/B6iTxk=","accountSignature":"KaozmMxvPQZUBROnnQHa0uZ5uiuP9BO1ISYhf9/YvD2DG+lI9GcWw2ZFRuRy+l6i6N1YgKMFmUfvKIYgzLBfBg==","deviceSignature":"+oe9n0uT/6Umc3GEYSM1PpfsMZqsz9Y6oaYPABO1vdk+RcHP6T0gtq8F6BKhDCZj0BcCBOXY8Oe3LpshXtXRDQ=="},"signalIdentities":[{"identifier":{"name":"50941704602:68@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BcVKOrcHa/UuMD46cMjqs2MFuHgizvQHHWoKQPweok8Z"}}],"platform":"android","lastAccountSyncTimestamp":1727486370,"myAppStateKeyId":"AAAAAIen"}",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : true,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : true,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "  boruto",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "50941704602",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
  YTDL_NO_UPDATE: process.env.YTDL_NO_UPDATE !== undefined ? process.env.YTDL_NO_UPDATE === 'true' : true,
};


module.exports = config;
