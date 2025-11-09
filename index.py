studio_foto = {
	"nama" : "Dhimas Stud",
	"alamat" : "Jl Tg Karang",
	"layanan" : [],
	"pendapatan" : 0
}

def daftarlayanan() :
	if len(studio_foto["layanan"]) == 0 :
		print("Belum ada layanan yang tersedia!")
	else :
		print("Daftar Layanan : ")
		for index, item in enumerate(studio_foto["layanan"]) :
			print(f"\t{index + 1}. {item["nama"]} - Rp. {item["harga"]} ({item["durasi"]} Menit)")

def liatinfo() :
	print("=" * 20)
	print(f"Nama : {studio_foto["nama"]}")
	print(f"Alamat : {studio_foto["alamat"]}")
	print(f"Jumlah Layanan : {len(studio_foto["layanan"])}")
	print(f"Pendapatan : {studio_foto["pendapatan"]}")
	print("=" * 20)
	daftarlayanan()

def editstudio() :
	nama = input("Masukkan nama studio baru : ")
	alamat = input("Masukkan alamat studio baru : ")

	studio_foto["nama"] = nama
	studio_foto["alamat"] = alamat

	print("Data berhasil di edit!")


def tambahlayanan() :
	nama = input("Nama Layanan : ")
	durasi = int(input("durasi per sesi (menit) : "))
	harga = int(input("Harga per sesi : "))

	data_lyn = {
		"nama" : nama,
		"durasi" : durasi,
		"harga" : harga,
	}

	studio_foto["layanan"].append(data_lyn)

	print(f"Layanan {data_lyn["nama"]} berhasil di tambahkan!")

def editlayanan() :
	daftarlayanan()
	pilih = int(input("Pilih layanan yang ingin di edit : "))
	if 0 < pilih < len(studio_foto["layanan"]) + 1 :
		nama = input("Masukkan nama baru : ")
		harga = int(input("Masukkan harga baru : "))
		durasi = int(input("Masukkan durasi baru : "))

		new_data = {
			"nama" : nama,
			"harga" : harga,
			"durasi" : durasi,
		}

		studio_foto["layanan"][pilih - 1] = new_data
		print("Data layanan berhasil di perbarui!")
	else :
		print("Tidak Valid !")
		editlayanan()
	
def hapuslayanan() :
	daftarlayanan()
	pilih = int(input("Pilih layanan yang ingin di hapus : "))
	if 0 < pilih < len(studio_foto["layanan"]) + 1 :
		deleteddata = studio_foto["layanan"].pop(pilih - 1)
		print(f"Layanan '{deleteddata["nama"]}' berhasil di hapus!")
	else : 
		print("Tidak Valid !")
		hapuslayanan()

def pesanlayanan() :
	daftarlayanan()
	pilih = int(input("Pilih layanan yang ingin di pesan : "))
	if 0 < pilih < len(studio_foto["layanan"]) + 1 :
		jumlahsesi = int(input("Berapa sesi yang ingin di pesan : "))
		diskon = 0
		print()
		print()
		if jumlahsesi >= 3 :
			diskon = 0.1
			print("Diskon 10% Berlaku untuk pemesanan lebih dari sama dengan 3 sesi !")
		elif jumlahsesi >= 5 :
			diskon = 0.2
			print("Diskon 20% Berlaku untuk pemesanan lebih dari sama dengan 3 sesi !")
		
		hargaawal = studio_foto["layanan"][pilih - 1]["harga"] * jumlahsesi
		potonganharga = hargaawal * diskon
		totalharga = hargaawal - potonganharga
		print()
		if potonganharga != 0 :
			print(f"Total Harga Sebelum Diskon : {hargaawal}")
			print(f"Potongan Harga ({diskon * 100}%): {potonganharga}")
			print(f"Total Yang Harus Di Bayar : {totalharga}")
		else :
			print(f"Total Harga : {totalharga}")
		studio_foto["pendapatan"] += totalharga
		print()
		print("Pemesanan berhasil di catat!")
		print(f"Pendapatan Studio Sekarang : Rp {studio_foto["pendapatan"]}")


	else :
		print("Tidak Valid!")
		pesanlayanan()

menu = 0
list_of_menu = [
	"Lihat Info",
	"Edit Studio",
	"Tambah Layanan",
	"Edit Layanan",
	"Hapus Layanan",
	"Pesan Layanan",
	"Keluar"
]
while menu != len(list_of_menu) :
	for nomor, item in enumerate(list_of_menu) :
		print(f"{nomor + 1}. {item}")
	
	menu = int(input("Pilih Menu : "))

	if menu == 1 :
		liatinfo()
	elif menu == 2 :
		editstudio()
	elif menu == 3 :
		tambahlayanan()
	elif menu == 4 :
		editlayanan()
	elif menu == 5 :
		hapuslayanan()
	elif menu == 6 :
		pesanlayanan()
	elif menu == len(list_of_menu) :
		print("Terima kasih telah menggunakan program kami!")
	else : 
		print("Tidak Valid !")

