import * as Fili from 'fili';

export function bandpass(samplingFreq: number, lowFreq: number, highFreq: number) {
  const firCalculator = new Fili.FirCoeffs();
  const Coefficients = firCalculator.bandpass({
    order: 101,
    Fs: samplingFreq,
    F2: lowFreq,
    F1: highFreq,
  });
  const filter = new Fili.FirFilter(Coefficients);

  return (value: number) => filter.singleStep(value) as number;
}
