import os
from moviepy.video.io.ffmpeg_tools import ffmpeg_extract_subclip

def main():
    print("Welcome to video cutter. Please enter the full path to the video you want to cut.\n")
    file_name = input()

    print("Please enter the start time in the following format: mm_ss.\n")
    start_text = input()
    start_min = start_text[0:2]
    start_sec = start_text[3:]

    start_time = (60 * start_min) + start_sec

    print("Please enter the end time in the following format: mm_ss.\n")
    end_text = input()
    end_min = end_text[0:2]
    end_sec = end_text[3:]

    end_time = (60 * end_min) + end_sec

    print("Please enter the desired title of the clipped video. If no value is entered, it will be start_time_end_time_[original file name]\n")
    out_dir = input()

    if not out_dir:
        out_dir = start_text + "_" end_text + "_" + file_name

    if out_dir[-3:] is not file_name[-3:]:
        out_dir = out_dir + file_name[-3:]

    clipping_now = True

    print("Clipping your video ...")

    ffmpeg_extract_subclip(file_name, start_time, end_time, out_dir)
