#LO CONVIERTE EN PPM

# from pdf2image import convert_from_path, convert_from_bytes



# images = convert_from_path('Reglas.pdf',size=(500,500), output_folder='./')

# for i in range(len(images)):
#      images[i].save(f"{i+1}.jpg")



from pdf2image import convert_from_path

images = convert_from_path('Reglas.pdf', size=(500,500), output_folder='./', fmt='jpg')

for i, image in enumerate(images):
    image.save(f"{i+1}.jpg")


