import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss'],
})
export class LessonsComponent implements OnInit {
  today = new Date();

  musicLessons = [
    'The Staff, Clefs, and Ledger Lines',
    'Note Duration',
    'Rest Duration',
    'Dots and Ties',
    'Steps and Accidentals',
    'Measures and Time Signature',
    'The Major Scale',
    'The Minor Scales',
    'Scale Degrees',
    'Key Signatures',
    'Key Signature Calculation',
    'Generic Intervals',
    'Specific Intervals',
    'Introduction to Chords',
    'Triad Inversion',
    'Seventh Chords',
    'More Seventh Chords',
    'Seventh Chord Inversion',
    'Diatonic Triads',
    'Roman Numeral Analysis: Triads',
    'Diatonic Seventh Chords',
    'Roman Numeral Analysis: Seventh Chords',
    'Composing with Minor Scales',
    'Voicing Chords',
    'Analysis: O Canada',
    'Nonharmonic Tones',
    'Phrases and Cadences',
    'Circle Progressions',
    'Common Chord Progressions',
    'Triads in First Inversion',
    'Triads in Second Inversion',
    'Analysis: Auld Lang Syne',
    'Building Neapolitan Chords',
    'Using Neapolitan Chords',
    'Interval Inversion',
  ];

  constructor() {}

  ngOnInit() {}
}
