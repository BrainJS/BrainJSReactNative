import 'react-native';
import React from 'react';
import classify from '../Services/classify-service.js'
import diff from 'jest-diff'

it('returns null on null input value', () => {
    let results = classify.classifyLyrics(null)
    expect(results).toBe(null)
});

it('returns NaN value for incorrect lyrics', () => {
    let results = classify.classifyLyrics("Dummy lyrics that don't exist in trained modal.")
    
    expect(isNaN(results.LeeKernaghan)).toBe(isNaN(results.LeeKernaghan))
    expect(isNaN(results.ACDC)).toBe(isNaN(results.ACDC))
})