import { Component, OnInit } from '@angular/core';
import { ListTexts } from "../shared/models/ListTexts.model";
import { WelcomeService } from "../shared/services/welcome.service";
import { Observable } from "rxjs";


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  tooltip: any;
  texts$!: Observable<ListTexts[]>;
  texts!: ListTexts[];
  constructor(private welcomeService: WelcomeService) { }

  ngOnInit() {

    let videoSource = new Array();
    let i = 0; // global
    let active = 0;

    videoSource = [
      './assets/video/video1.mp4',
      './assets/video/video2.mp4',
      './assets/video/video3.mp4',
      './assets/video/video4.mp4',
      './assets/video/video5.mp4'
    ]


    const videoCount = videoSource.length;
    const element = document.getElementById("videos") as HTMLVideoElement;
    const inputElement = document.getElementById('button') as HTMLInputElement
    const progressBar = document.getElementById("progress-bar") as HTMLInputElement;
    const progressNum = document.getElementById("progress-num") as HTMLInputElement;
    const progressNext = document.getElementById("progress-next") as HTMLInputElement;
    const steps = document.querySelectorAll(".step");
    const text = document.getElementById('text') as HTMLInputElement;

    inputElement.style.display = "none";


    function videoPlay(videoNum) {
      element.setAttribute("src", videoSource[videoNum]);
      element.autoplay = true;
      element.load();
    }

    document.getElementById('videos').addEventListener('ended', myHandler, false);

    videoPlay(0); // load the first video
    ensureVideoPlays(); // play the video automatically

    this.texts$ = this.welcomeService.getTexts();
    this.texts$.subscribe(texts => {
      this.texts = texts;
      console.log(this.texts);
      if (i === 0) {
        text.src = this.texts[i].text;
        this.tooltip = text.src;
      }
    });



    function myHandler() {
      i++;
      if (i == videoCount) {
        if (i == 5) {
          element.style.display = "none";
          inputElement.style.display = "block";
          progressNext.style.display = "none";
          progressNum.style.display = "none";
          text.style.display = "none";
        }
      } else {
        videoPlay(i);
        active++;
        if (active > steps.length) {
          active = steps.length;
        }
        updateProgress();
      }
    }

    function ensureVideoPlays() {
      const video = document.getElementById('videos') as HTMLVideoElement;
      if (!video) return;
      const promise = video.play();
      if (promise !== undefined) {
        promise.then(() => {
          // Autoplay started
        }).catch(error => {
          // Autoplay was prevented.
          video.muted = true;
          video.play();
        });
      }
    }




    progressNext.addEventListener("click", () => {
      active++;
      if (active > steps.length) {
        active = steps.length;
      }
      updateProgress();
    });


    const updateProgress = () => {
      steps.forEach((step, i) => {
        if (i == active) {
          step.classList.add("active");
          element.src = videoSource[i];
          text.src = this.texts[i].text;
          this.tooltip = text.src;

        }
      });

      progressBar.style.width = ((active - 1) / (steps.length - 1)) * 100 + "%";
      if (active != steps.length) {
        progressNext.disabled = false;
        progressNext.addEventListener('click', function () {
          element.src = videoSource[active];
          if (active == 4) {
            element.style.display = "none";
            inputElement.style.display = "block";
            progressNext.style.display = "none";
            progressNum.style.display = "none";
            text.style.display = "none";
          }
        }, true);
      }
    };
  }
}
