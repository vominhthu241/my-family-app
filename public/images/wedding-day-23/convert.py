import os
from PIL import Image, ImageOps

def convert_images_with_orientation(input_folder):
    # Create output folder if it doesn't exist
    output_folder = os.path.join(input_folder, "output")
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Supported image formats
    supported_formats = (".png", ".jpg", ".jpeg", ".bmp", ".tiff")

    # Iterate through all files in the input folder
    converted_count = 0
    for filename in os.listdir(input_folder):
        if filename.lower().endswith(supported_formats):
            # Open image and handle orientation
            input_path = os.path.join(input_folder, filename)
            image = Image.open(input_path)

            # Preserve orientation using EXIF data
            try:
                image = ImageOps.exif_transpose(image)
                converted_count += 1
            except Exception as e:
                print(f"Warning: Could not handle EXIF orientation for {filename}: {e}")
                continue

            output_path = os.path.join(output_folder, f"{os.path.splitext(filename)[0]}.webp")

            # Save image as webp, keeping quality and size
            image.save(output_path, "webp", quality=80, optimize=True)

    print(f"Conversion complete with preserved orientation. Images saved in {output_folder}")
    print(f"Đã chuyển đổi thành công {converted_count} ảnh. Lưu tại {output_folder}")

# Cho phép người dùng nhập đường dẫn
input_folder = input("Nhập đường dẫn thư mục chứa ảnh: ").strip() or "/Users/anna/Downloads/album/new-img"
convert_images_with_orientation(input_folder)