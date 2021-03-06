var hari = ['', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Minggu']
var bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
module.exports = {
  sayhello() {
    return 'hello'
  },
  validasi(params) {
    if (params >= 10) {
      return params;
    } else {
      return '0' + params;
    }
  },
  hari(date) {
    let ind = date.getDay();
    return hari[ind];
  },
  bulan(date) {
    let ind = date.getMonth();
    return bulan[ind];
  },
  tahun(date) {
    let tahun = date.getFullYear();
    return tahun;
  },
  jam(date) {
    let jam = date.getHours();
    return this.validasi(jam);
  },
  menit(date) {
    let menit = date.getMinutes();
    return this.validasi(menit);
  },
  detik(date) {
    let detik = date.getSeconds();
    return this.validasi(detik);
  },
  formatdate1(date) {
    let str = this.hari(date) + ', ' + this.bulan(date) + ' ' + this.tahun(date); //Rabu, Mei 2017
    return str;
  },
  formatdate2(date) {
    let str = this.tahun(date) + ', ' + this.bulan(date); //2017, Mei
    return str;
  },
  formatdate3(date) {
    let tgl = date.getDate();
    let bln = date.getMonth();
    let thn = date.getFullYear();
    let str = this.validasi(tgl) + '/' + this.validasi(bln) + '/' + this.validasi(thn); //17/04/2017
    return str;
  },
  formatdate4(date) {
    let tgl = date.getDate();
    let bln = date.getMonth();
    let thn = date.getFullYear();
    let str = this.validasi(thn) + '-' + this.validasi(bln) + '-' + this.validasi(tgl); //2017-04-17
    return str;
  },
  formattime1(date) {
    let str = this.jam(date) + ':' + this.menit(date) + ':' + this.detik(date); //11:06:20
    return str;
  },
  formattime2(date) {
    let str = this.jam(date) + ':' + this.menit(date); //11:06
    return str;
  },
  formatfull1(date) {
    let str = this.formatdate1(date) + ' ' + this.formattime1(date); //Rabu, Mei 2017 11:11:09
    return str;
  },
  formatfull2(date) {
    let str = this.formatdate4(date) + 'T' + this.formattime1(date); //2017-04-17T11:30:06
    return str;
  },
  formatfull3(date) {
    let str = this.formatdate4(date) + 'T' + this.formattime1(date) + 'Z'; //2017-04-17T11:31:58Z
    return str;
  },
  kapan(date) {
    let last = date.getTime();
    let now = new Date().getTime();
    let result = now - last;
    if (result < 60000) {
      let temp = Math.round(result / 1000);
      return temp + ' detik lalu';
    } else if (result >= 60000 && result < 3600000) {
      let temp = Math.round(result / 60000); //58
      return temp + ' menit lalu';
    } else if (result >= 3600000 && result < 86400000) {
      let temp = Math.round(result / 3600000);
      return temp + ' jam lalu';
    } else if (result >= 3600000 && result < 25200000) {
      let temp = Math.round(result / 3600000);
      return temp + ' hari lalu';
    } else if (result >= 25200000) {
      return this.formatdate1(date);
    } else {
      return 'err result : ' + result;
    }
  }
}
