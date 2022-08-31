#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.2.4),
    on August 31, 2022, at 14:30
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2022.2.4'
expName = 'IRAP'  # from the Builder filename that created this script
expInfo = {
    'gender': '',
    'age': '',
    'participant': '',
    'StartingBlock': 'a',
    'UseMonkey': 'n',
}
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data' + os.path.sep + '%s_%s' %(expInfo['participant'], expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\ceir_\\Downloads\\RV__INSTRUCTIVO_PARA_DISEÑO_PROGRAMA_IRAP\\OpenSourceIRAP-master\\OpenSourceIRAP-master\\Open Source IRAP_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.ERROR)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# --- Setup the Window ---
win = visual.Window(
    size=[1504, 1003], fullscr=False, screen=0, 
    winType='pyglet', allowStencil=False,
    monitor='testMonitor', color="'#000000'", colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='norm')
win.mouseVisible = True
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# --- Setup input devices ---
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# --- Initialize components for Routine "instructions" ---
# Run 'Begin Experiment' code from inst_code
# Dependencies

from psychopy.hardware.emulator import ResponseEmulator  #for response emulator
import itertools  # for flattening lists of lists into lists
import random  # for shuffling lists

# Functions

# Convert string to boolean.
# Take any likely input from the task.xlsx file and convert to a boolean. This helps to idiot-proof the excel files.
def string_to_booleanl(v):
  return v.lower() in ("yes", "true", "TRUE", "True", "t", "T", 1)

# Trial generation function
def generate_trials(trial_type_column, multiplier, shuffle_list):
    """Generate a shuffled list of stimuli exemplars from a column in an excel stimuli file""" 
    a = dict()  # declare a dict to be populated
    for i in range(len(exemplars)):
        a[i] = [exemplars[i][trial_type_column]] * multiplier  # populate the dict from vertical reads of the conditions
    a = a.values()  # extract only values (and not keys) from the list of dicts
    a = list(itertools.chain(*a))  # flatten the list of dicts into a list
    if shuffle_list == True:
        random.shuffle(a)  # shuffle this list, so that it can be drawn from by the trials
    return a


# Determine variables based on dialogue box

# auto response monkey
if str(expInfo['UseMonkey']) == 'y' or str(expInfo['UseMonkey']) == 'Y' or str(expInfo['UseMonkey']) == 'yes' or str(expInfo['UseMonkey']) == 't' or str(expInfo['UseMonkey']) == 'true' or str(expInfo['UseMonkey']) == 'True' or str(expInfo['UseMonkey']) == 'TRUE':
    Monkey = True
else:
    Monkey = False

# starting block
if str(expInfo['StartingBlock']) == 'a' or str(expInfo['StartingBlock']) == 'A':
    starting_block = 'a'
    Afirst_nReps = 1
    Asecond_nReps = 0
elif str(expInfo['StartingBlock']) == 'b' or str(expInfo['StartingBlock']) == 'B':
    starting_block = 'b'
    Afirst_nReps = 0
    Asecond_nReps = 1

intro_box = visual.TextStim(win=win, name='intro_box',
    text='',
    font='Arial',
    pos=[0, 0], height=0.08, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
intro_resp = keyboard.Keyboard()

# --- Initialize components for Routine "preblock_A" ---
# Run 'Begin Experiment' code from preblock_A_code
# msg variable just needs some value at start
accuracyFeedback=''

rule_box_A = visual.TextStim(win=win, name='rule_box_A',
    text='',
    font='Arial',
    pos=[0, 0], height=0.08, wrapWidth=1.5, ori=0, 
    color='orange', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
preblock_response_A = keyboard.Keyboard()

# --- Initialize components for Routine "trial_A" ---
image_stimulus1_box_A = visual.ImageStim(
    win=win,
    name='image_stimulus1_box_A', 
    image='sin', mask=None, anchor='center',
    ori=0, pos=[0,0], size=[0.5, 0.5],
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
image_stimulus2_box_A = visual.ImageStim(
    win=win,
    name='image_stimulus2_box_A', 
    image='sin', mask=None, anchor='center',
    ori=0, pos=[0,0], size=[0.5, 0.5],
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
stimulus1_box_A = visual.TextStim(win=win, name='stimulus1_box_A',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
stimulus2_box_A = visual.TextStim(win=win, name='stimulus2_box_A',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
required_response_A = keyboard.Keyboard()
feedback_response_A = keyboard.Keyboard()
left_box_A = visual.TextStim(win=win, name='left_box_A',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);
right_box_A = visual.TextStim(win=win, name='right_box_A',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-8.0);
accuracy_feedback_box_A = visual.TextStim(win=win, name='accuracy_feedback_box_A',
    text='',
    font='Arial',
    pos=[0,0], height=0.2, wrapWidth=None, ori=0, 
    color='red', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-9.0);

# --- Initialize components for Routine "practice_postblock_A" ---
practice_aim_box_A = visual.TextStim(win=win, name='practice_aim_box_A',
    text='',
    font='Arial',
    pos=[0, 0.2], height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
practice_accuracy_box_A = visual.TextStim(win=win, name='practice_accuracy_box_A',
    text='',
    font='Arial',
    pos=[0, 0], height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
practice_latency_box_A = visual.TextStim(win=win, name='practice_latency_box_A',
    text='',
    font='Arial',
    pos=[0, -0.2], height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
press_box_prac_A = visual.TextStim(win=win, name='press_box_prac_A',
    text='',
    font='Arial',
    pos=[0, -0.5], height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
practice_postblock_response_A = keyboard.Keyboard()

# --- Initialize components for Routine "preblock_B" ---
rule_box_B = visual.TextStim(win=win, name='rule_box_B',
    text='',
    font='Arial',
    pos=[0, 0], height=0.08, wrapWidth=1.5, ori=0, 
    color='cyan', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
preblock_response_B = keyboard.Keyboard()

# --- Initialize components for Routine "trial_B" ---
# Run 'Begin Experiment' code from trial_code_B
#msg variable just needs some value at start
accuracyFeedback=''
image_stimulus1_box_B = visual.ImageStim(
    win=win,
    name='image_stimulus1_box_B', 
    image='sin', mask=None, anchor='center',
    ori=0, pos=[0,0], size=[0.5, 0.5],
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
image_stimulus2_box_B = visual.ImageStim(
    win=win,
    name='image_stimulus2_box_B', 
    image='sin', mask=None, anchor='center',
    ori=0, pos=[0,0], size=[0.5, 0.5],
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
stimulus1_box_B = visual.TextStim(win=win, name='stimulus1_box_B',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
stimulus2_box_B = visual.TextStim(win=win, name='stimulus2_box_B',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
required_response_B = keyboard.Keyboard()
feedback_response_B = keyboard.Keyboard()
left_box_B = visual.TextStim(win=win, name='left_box_B',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);
right_box_B = visual.TextStim(win=win, name='right_box_B',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-8.0);
accuracy_feedback_box_B = visual.TextStim(win=win, name='accuracy_feedback_box_B',
    text='',
    font='Arial',
    pos=[0,0], height=0.2, wrapWidth=None, ori=0, 
    color='red', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-9.0);

# --- Initialize components for Routine "practice_postblock_B" ---
practice_aim_box_B = visual.TextStim(win=win, name='practice_aim_box_B',
    text='',
    font='Arial',
    pos=[0, 0.2], height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
practice_accuracy_box_B = visual.TextStim(win=win, name='practice_accuracy_box_B',
    text='',
    font='Arial',
    pos=[0, 0], height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
practice_latency_box_B = visual.TextStim(win=win, name='practice_latency_box_B',
    text='',
    font='Arial',
    pos=[0, -0.2], height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
press_box_prac_B = visual.TextStim(win=win, name='press_box_prac_B',
    text='',
    font='Arial',
    pos=[0, -0.5], height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
practice_postblock_response_B = keyboard.Keyboard()

# --- Initialize components for Routine "preblock_A" ---
# Run 'Begin Experiment' code from preblock_A_code
# msg variable just needs some value at start
accuracyFeedback=''

rule_box_A = visual.TextStim(win=win, name='rule_box_A',
    text='',
    font='Arial',
    pos=[0, 0], height=0.08, wrapWidth=1.5, ori=0, 
    color='orange', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
preblock_response_A = keyboard.Keyboard()

# --- Initialize components for Routine "trial_A" ---
image_stimulus1_box_A = visual.ImageStim(
    win=win,
    name='image_stimulus1_box_A', 
    image='sin', mask=None, anchor='center',
    ori=0, pos=[0,0], size=[0.5, 0.5],
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
image_stimulus2_box_A = visual.ImageStim(
    win=win,
    name='image_stimulus2_box_A', 
    image='sin', mask=None, anchor='center',
    ori=0, pos=[0,0], size=[0.5, 0.5],
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
stimulus1_box_A = visual.TextStim(win=win, name='stimulus1_box_A',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
stimulus2_box_A = visual.TextStim(win=win, name='stimulus2_box_A',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
required_response_A = keyboard.Keyboard()
feedback_response_A = keyboard.Keyboard()
left_box_A = visual.TextStim(win=win, name='left_box_A',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);
right_box_A = visual.TextStim(win=win, name='right_box_A',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-8.0);
accuracy_feedback_box_A = visual.TextStim(win=win, name='accuracy_feedback_box_A',
    text='',
    font='Arial',
    pos=[0,0], height=0.2, wrapWidth=None, ori=0, 
    color='red', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-9.0);

# --- Initialize components for Routine "practice_postblock_A" ---
practice_aim_box_A = visual.TextStim(win=win, name='practice_aim_box_A',
    text='',
    font='Arial',
    pos=[0, 0.2], height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
practice_accuracy_box_A = visual.TextStim(win=win, name='practice_accuracy_box_A',
    text='',
    font='Arial',
    pos=[0, 0], height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
practice_latency_box_A = visual.TextStim(win=win, name='practice_latency_box_A',
    text='',
    font='Arial',
    pos=[0, -0.2], height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
press_box_prac_A = visual.TextStim(win=win, name='press_box_prac_A',
    text='',
    font='Arial',
    pos=[0, -0.5], height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
practice_postblock_response_A = keyboard.Keyboard()

# --- Initialize components for Routine "end_practice_blocks" ---
# Run 'Begin Experiment' code from end_practice_code
# by default, don't do test blocks. Change elsewhere if mastery criteria are met.
complete_test_blocks = 0

# --- Initialize components for Routine "preblock_A" ---
# Run 'Begin Experiment' code from preblock_A_code
# msg variable just needs some value at start
accuracyFeedback=''

rule_box_A = visual.TextStim(win=win, name='rule_box_A',
    text='',
    font='Arial',
    pos=[0, 0], height=0.08, wrapWidth=1.5, ori=0, 
    color='orange', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
preblock_response_A = keyboard.Keyboard()

# --- Initialize components for Routine "trial_A" ---
image_stimulus1_box_A = visual.ImageStim(
    win=win,
    name='image_stimulus1_box_A', 
    image='sin', mask=None, anchor='center',
    ori=0, pos=[0,0], size=[0.5, 0.5],
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
image_stimulus2_box_A = visual.ImageStim(
    win=win,
    name='image_stimulus2_box_A', 
    image='sin', mask=None, anchor='center',
    ori=0, pos=[0,0], size=[0.5, 0.5],
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
stimulus1_box_A = visual.TextStim(win=win, name='stimulus1_box_A',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
stimulus2_box_A = visual.TextStim(win=win, name='stimulus2_box_A',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
required_response_A = keyboard.Keyboard()
feedback_response_A = keyboard.Keyboard()
left_box_A = visual.TextStim(win=win, name='left_box_A',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);
right_box_A = visual.TextStim(win=win, name='right_box_A',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-8.0);
accuracy_feedback_box_A = visual.TextStim(win=win, name='accuracy_feedback_box_A',
    text='',
    font='Arial',
    pos=[0,0], height=0.2, wrapWidth=None, ori=0, 
    color='red', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-9.0);

# --- Initialize components for Routine "postblock_A" ---
aim_box_A = visual.TextStim(win=win, name='aim_box_A',
    text='',
    font='Arial',
    pos=[0, 0.2], height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
accuracy_box_A = visual.TextStim(win=win, name='accuracy_box_A',
    text='',
    font='Arial',
    pos=[0, 0], height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
latency_box_A = visual.TextStim(win=win, name='latency_box_A',
    text='',
    font='Arial',
    pos=[0, -0.2], height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
press_box_A = visual.TextStim(win=win, name='press_box_A',
    text='',
    font='Arial',
    pos=[0, -0.5], height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
postblock_response_A = keyboard.Keyboard()

# --- Initialize components for Routine "preblock_B" ---
rule_box_B = visual.TextStim(win=win, name='rule_box_B',
    text='',
    font='Arial',
    pos=[0, 0], height=0.08, wrapWidth=1.5, ori=0, 
    color='cyan', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
preblock_response_B = keyboard.Keyboard()

# --- Initialize components for Routine "trial_B" ---
# Run 'Begin Experiment' code from trial_code_B
#msg variable just needs some value at start
accuracyFeedback=''
image_stimulus1_box_B = visual.ImageStim(
    win=win,
    name='image_stimulus1_box_B', 
    image='sin', mask=None, anchor='center',
    ori=0, pos=[0,0], size=[0.5, 0.5],
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
image_stimulus2_box_B = visual.ImageStim(
    win=win,
    name='image_stimulus2_box_B', 
    image='sin', mask=None, anchor='center',
    ori=0, pos=[0,0], size=[0.5, 0.5],
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
stimulus1_box_B = visual.TextStim(win=win, name='stimulus1_box_B',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
stimulus2_box_B = visual.TextStim(win=win, name='stimulus2_box_B',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
required_response_B = keyboard.Keyboard()
feedback_response_B = keyboard.Keyboard()
left_box_B = visual.TextStim(win=win, name='left_box_B',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);
right_box_B = visual.TextStim(win=win, name='right_box_B',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-8.0);
accuracy_feedback_box_B = visual.TextStim(win=win, name='accuracy_feedback_box_B',
    text='',
    font='Arial',
    pos=[0,0], height=0.2, wrapWidth=None, ori=0, 
    color='red', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-9.0);

# --- Initialize components for Routine "postblock_B" ---
aim_box_B = visual.TextStim(win=win, name='aim_box_B',
    text='',
    font='Arial',
    pos=[0, 0.2], height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
accuracy_box_B = visual.TextStim(win=win, name='accuracy_box_B',
    text='',
    font='Arial',
    pos=[0, 0], height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
latency_box_B = visual.TextStim(win=win, name='latency_box_B',
    text='',
    font='Arial',
    pos=[0, -0.2], height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
press_box_B = visual.TextStim(win=win, name='press_box_B',
    text='',
    font='Arial',
    pos=[0, -0.5], height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
postblock_response_B = keyboard.Keyboard()

# --- Initialize components for Routine "preblock_A" ---
# Run 'Begin Experiment' code from preblock_A_code
# msg variable just needs some value at start
accuracyFeedback=''

rule_box_A = visual.TextStim(win=win, name='rule_box_A',
    text='',
    font='Arial',
    pos=[0, 0], height=0.08, wrapWidth=1.5, ori=0, 
    color='orange', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
preblock_response_A = keyboard.Keyboard()

# --- Initialize components for Routine "trial_A" ---
image_stimulus1_box_A = visual.ImageStim(
    win=win,
    name='image_stimulus1_box_A', 
    image='sin', mask=None, anchor='center',
    ori=0, pos=[0,0], size=[0.5, 0.5],
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
image_stimulus2_box_A = visual.ImageStim(
    win=win,
    name='image_stimulus2_box_A', 
    image='sin', mask=None, anchor='center',
    ori=0, pos=[0,0], size=[0.5, 0.5],
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
stimulus1_box_A = visual.TextStim(win=win, name='stimulus1_box_A',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
stimulus2_box_A = visual.TextStim(win=win, name='stimulus2_box_A',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
required_response_A = keyboard.Keyboard()
feedback_response_A = keyboard.Keyboard()
left_box_A = visual.TextStim(win=win, name='left_box_A',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);
right_box_A = visual.TextStim(win=win, name='right_box_A',
    text='',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-8.0);
accuracy_feedback_box_A = visual.TextStim(win=win, name='accuracy_feedback_box_A',
    text='',
    font='Arial',
    pos=[0,0], height=0.2, wrapWidth=None, ori=0, 
    color='red', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-9.0);

# --- Initialize components for Routine "postblock_A" ---
aim_box_A = visual.TextStim(win=win, name='aim_box_A',
    text='',
    font='Arial',
    pos=[0, 0.2], height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
accuracy_box_A = visual.TextStim(win=win, name='accuracy_box_A',
    text='',
    font='Arial',
    pos=[0, 0], height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
latency_box_A = visual.TextStim(win=win, name='latency_box_A',
    text='',
    font='Arial',
    pos=[0, -0.2], height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
press_box_A = visual.TextStim(win=win, name='press_box_A',
    text='',
    font='Arial',
    pos=[0, -0.5], height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
postblock_response_A = keyboard.Keyboard()

# --- Initialize components for Routine "end" ---
end_box = visual.TextStim(win=win, name='end_box',
    text='',
    font='Arial',
    pos=[0, 0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
end_response = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# set up handler to look after randomisation of conditions etc
task = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('task.xlsx'),
    seed=None, name='task')
thisExp.addLoop(task)  # add the loop to the experiment
thisTask = task.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTask.rgb)
if thisTask != None:
    for paramName in thisTask:
        exec('{} = thisTask[paramName]'.format(paramName))

for thisTask in task:
    currentLoop = task
    # abbreviate parameter names if possible (e.g. rgb = thisTask.rgb)
    if thisTask != None:
        for paramName in thisTask:
            exec('{} = thisTask[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "instructions" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from inst_code
    # ResponseEmulator
    if Monkey:
        simulated_responses = [(1.1, 'e'), (1.1, 'i')]  # simulated responses take the form (onsetTime, responseKey). You can simulate more than one.
        responder = ResponseEmulator(simulated_responses)
        responder.start()
    
    # Create sufficiently long lists of stimuli
    """
    This allows us to keep the stimuli in an excel file across multiple lines, and to present them based on the categories 
    set by the 'layout.xlsx' file. This allows for shuffled (counterbalanced pseudorandom) presentation of the stimuli examplars 
    as well as the categories. 
    
    The method to do this below is to first declare a dictionary to be populated from the exemplars conditions, but not in the usual way. 
    Usually, psychopy would read across columns. If the stimuli were entered as a list within the excel file (e.g., ['male', 'female']) 
    rather on seperate rows as they are now all we would have to do is multiply the length of the list to get enough exemplars. However, 
    I wanted the stimuli file to be as use friendly as possible, so instead the below code allows you to enter the exemplars on seperate
    rows, and then populates the dict vertically from the rows. 
    """
    # Import stimuli exemplars
    exemplars = data.importConditions(stimulus_file)  # Import stimuli exemplars. stimulus_file is defined in task.xlsx
    
    # Determine nReps of trials loop based on number of exemplars
    reptitions = len(exemplars)
    
    
    # Generate a first, unshuffled list of the stimuli exemplars for saving to output file
    
    # 1. generate: no shuffling, multiplier = 1.
    labelA_stimuli_for_output = generate_trials('labelA_stimuli', 1, False)  # function and variable determined at begin exp.
    labelB_stimuli_for_output = generate_trials('labelB_stimuli', 1, False)
    targetA_stimuli_for_output = generate_trials('targetA_stimuli', 1, False)
    targetB_stimuli_for_output = generate_trials('targetB_stimuli', 1, False)
    labelA_image_stimuli_for_output = generate_trials('labelA_image_stimuli', 1, False)
    labelB_image_stimuli_for_output = generate_trials('labelB_image_stimuli', 1, False)
    targetA_image_stimuli_for_output = generate_trials('targetA_image_stimuli', 1, False)
    targetB_image_stimuli_for_output = generate_trials('targetB_image_stimuli', 1, False)
    
    # 2. save these lists to the trial handler to be written to csv
    thisExp.addData('labelA_stimuli_for_output', labelA_stimuli_for_output)
    thisExp.addData('labelB_stimuli_for_output', labelB_stimuli_for_output)
    thisExp.addData('targetA_stimuli_for_output', targetA_stimuli_for_output)
    thisExp.addData('targetB_stimuli_for_output', targetB_stimuli_for_output)
    thisExp.addData('labelA_image_stimuli_for_output', labelA_image_stimuli_for_output)
    thisExp.addData('labelB_image_stimuli_for_output', labelB_image_stimuli_for_output)
    thisExp.addData('targetA_image_stimuli_for_output', targetA_image_stimuli_for_output)
    thisExp.addData('targetB_image_stimuli_for_output', targetB_image_stimuli_for_output)
    intro_box.setText(intro_message)
    intro_resp.keys = []
    intro_resp.rt = []
    _intro_resp_allKeys = []
    # keep track of which components have finished
    instructionsComponents = [intro_box, intro_resp]
    for thisComponent in instructionsComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "instructions" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *intro_box* updates
        if intro_box.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
            # keep track of start time/frame for later
            intro_box.frameNStart = frameN  # exact frame index
            intro_box.tStart = t  # local t and not account for scr refresh
            intro_box.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(intro_box, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'intro_box.started')
            intro_box.setAutoDraw(True)
        
        # *intro_resp* updates
        waitOnFlip = False
        if intro_resp.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            intro_resp.frameNStart = frameN  # exact frame index
            intro_resp.tStart = t  # local t and not account for scr refresh
            intro_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(intro_resp, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'intro_resp.started')
            intro_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(intro_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(intro_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if intro_resp.status == STARTED and not waitOnFlip:
            theseKeys = intro_resp.getKeys(keyList=['e', 'i'], waitRelease=False)
            _intro_resp_allKeys.extend(theseKeys)
            if len(_intro_resp_allKeys):
                intro_resp.keys = _intro_resp_allKeys[-1].name  # just the last key pressed
                intro_resp.rt = _intro_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instructionsComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "instructions" ---
    for thisComponent in instructionsComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    practice_blocks = data.TrialHandler(nReps=max_pairs_practice_blocks, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='practice_blocks')
    thisExp.addLoop(practice_blocks)  # add the loop to the experiment
    thisPractice_block = practice_blocks.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisPractice_block.rgb)
    if thisPractice_block != None:
        for paramName in thisPractice_block:
            exec('{} = thisPractice_block[paramName]'.format(paramName))
    
    for thisPractice_block in practice_blocks:
        currentLoop = practice_blocks
        # abbreviate parameter names if possible (e.g. rgb = thisPractice_block.rgb)
        if thisPractice_block != None:
            for paramName in thisPractice_block:
                exec('{} = thisPractice_block[paramName]'.format(paramName))
        
        # set up handler to look after randomisation of conditions etc
        practice_Afirst = data.TrialHandler(nReps=Afirst_nReps, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=[None],
            seed=None, name='practice_Afirst')
        thisExp.addLoop(practice_Afirst)  # add the loop to the experiment
        thisPractice_Afirst = practice_Afirst.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisPractice_Afirst.rgb)
        if thisPractice_Afirst != None:
            for paramName in thisPractice_Afirst:
                exec('{} = thisPractice_Afirst[paramName]'.format(paramName))
        
        for thisPractice_Afirst in practice_Afirst:
            currentLoop = practice_Afirst
            # abbreviate parameter names if possible (e.g. rgb = thisPractice_Afirst.rgb)
            if thisPractice_Afirst != None:
                for paramName in thisPractice_Afirst:
                    exec('{} = thisPractice_Afirst[paramName]'.format(paramName))
            
            # --- Prepare to start Routine "preblock_A" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            # Run 'Begin Routine' code from preblock_A_code
            # Option to simulates using ResponseEmulator:
            if Monkey:
                simulated_responses = [(1.1, 'e'), (1.1, 'i')]  # simulated responses take the form (onsetTime, responseKey). You can simulate more than one.
                responder = ResponseEmulator(simulated_responses)
                responder.start()
            
            # Generate list of stimuli for the block
            stim1_catA_stimuli_many = generate_trials('labelA_stimuli', 2, True)  # function and variable determined at begin exp.
            stim1_catB_stimuli_many = generate_trials('labelB_stimuli', 2, True)
            stim2_catA_stimuli_many = generate_trials('targetA_stimuli', 2, True)
            stim2_catB_stimuli_many = generate_trials('targetB_stimuli', 2, True)
            img_stim1_catA_stimuli_many = generate_trials('labelA_image_stimuli', 2, True)
            img_stim1_catB_stimuli_many = generate_trials('labelB_image_stimuli', 2, True)
            img_stim2_catA_stimuli_many = generate_trials('targetA_image_stimuli', 2, True)
            img_stim2_catB_stimuli_many = generate_trials('targetB_image_stimuli', 2, True)
            
            rule_box_A.setText(rule_A)
            preblock_response_A.keys = []
            preblock_response_A.rt = []
            _preblock_response_A_allKeys = []
            # keep track of which components have finished
            preblock_AComponents = [rule_box_A, preblock_response_A]
            for thisComponent in preblock_AComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "preblock_A" ---
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *rule_box_A* updates
                if rule_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    rule_box_A.frameNStart = frameN  # exact frame index
                    rule_box_A.tStart = t  # local t and not account for scr refresh
                    rule_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(rule_box_A, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'rule_box_A.started')
                    rule_box_A.setAutoDraw(True)
                
                # *preblock_response_A* updates
                waitOnFlip = False
                if preblock_response_A.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
                    # keep track of start time/frame for later
                    preblock_response_A.frameNStart = frameN  # exact frame index
                    preblock_response_A.tStart = t  # local t and not account for scr refresh
                    preblock_response_A.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(preblock_response_A, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'preblock_response_A.started')
                    preblock_response_A.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(preblock_response_A.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(preblock_response_A.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if preblock_response_A.status == STARTED and not waitOnFlip:
                    theseKeys = preblock_response_A.getKeys(keyList=['e', 'i'], waitRelease=False)
                    _preblock_response_A_allKeys.extend(theseKeys)
                    if len(_preblock_response_A_allKeys):
                        preblock_response_A.keys = _preblock_response_A_allKeys[-1].name  # just the last key pressed
                        preblock_response_A.rt = _preblock_response_A_allKeys[-1].rt
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in preblock_AComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "preblock_A" ---
            for thisComponent in preblock_AComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "preblock_A" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # set up handler to look after randomisation of conditions etc
            practice_trials_Afirst = data.TrialHandler(nReps=reptitions, method='random', 
                extraInfo=expInfo, originPath=-1,
                trialList=data.importConditions('block_layout.xlsx'),
                seed=None, name='practice_trials_Afirst')
            thisExp.addLoop(practice_trials_Afirst)  # add the loop to the experiment
            thisPractice_trials_Afirst = practice_trials_Afirst.trialList[0]  # so we can initialise stimuli with some values
            # abbreviate parameter names if possible (e.g. rgb = thisPractice_trials_Afirst.rgb)
            if thisPractice_trials_Afirst != None:
                for paramName in thisPractice_trials_Afirst:
                    exec('{} = thisPractice_trials_Afirst[paramName]'.format(paramName))
            
            for thisPractice_trials_Afirst in practice_trials_Afirst:
                currentLoop = practice_trials_Afirst
                # abbreviate parameter names if possible (e.g. rgb = thisPractice_trials_Afirst.rgb)
                if thisPractice_trials_Afirst != None:
                    for paramName in thisPractice_trials_Afirst:
                        exec('{} = thisPractice_trials_Afirst[paramName]'.format(paramName))
                
                # --- Prepare to start Routine "trial_A" ---
                continueRoutine = True
                routineForceEnded = False
                # update component parameters for each repeat
                # Run 'Begin Routine' code from trial_code_A
                # Option to simulates using ResponseEmulator:
                if Monkey:
                    simulated_responses = [(0.5, 'e'), (0.5, 'i')]  # simulated responses take the form (onsetTime, responseKey). You can simulate more than one.
                    responder = ResponseEmulator(simulated_responses)
                    responder.start()
                
                # For each stimlulus, choose a random exemplar from the appropriate list
                # word stimulus 1
                if stimulus1_category == 'a':
                    stimulus1 = stim1_catA_stimuli_many.pop()
                elif stimulus1_category == 'b':
                    stimulus1 = stim1_catB_stimuli_many.pop()
                
                # word stimulus 2
                if stimulus2_category == 'c':
                    stimulus2 = stim2_catA_stimuli_many.pop()
                elif stimulus2_category == 'd':
                    stimulus2 = stim2_catB_stimuli_many.pop()
                
                # image stimulus 1
                if stimulus1_category == 'a':
                    img_stimulus1 = img_stim1_catA_stimuli_many.pop()
                elif stimulus1_category == 'b':
                    img_stimulus1 = img_stim1_catB_stimuli_many.pop()
                
                # image stimulus 2
                if stimulus2_category == 'c':
                    img_stimulus2 = img_stim2_catA_stimuli_many.pop()
                elif stimulus2_category == 'd':
                    img_stimulus2 = img_stim2_catB_stimuli_many.pop()
                
                # set correct and incorrect responses
                if moving_response_options == False:
                    response_option_left = response_option_B  # i.e., the focal trial type is the right hand one, for hand dominance
                    response_option_right = response_option_A
                    response_option_onset = 0  # response options are onscreen constantly
                    if (trialType == 1) or (trialType == 4):
                        required_allowed = 'i'
                        required_correct = 'i'
                        feedback_allowed = 'e'
                        feedback_correct = 'e'
                    elif (trialType == 2) or (trialType == 3):
                        required_allowed = 'e'
                        required_correct = 'e'
                        feedback_allowed = 'i'
                        feedback_correct = 'i'
                elif moving_response_options == True:
                    rand_positions = randint(1, 3)
                    response_option_onset = 0.4  # response options appear with stimuli
                    if rand_positions == 1:
                        response_option_left = response_option_B
                        response_option_right = response_option_A
                        if (trialType == 1) or (trialType == 4):
                            required_allowed = 'i'
                            required_correct = 'i'
                            feedback_allowed = 'e'
                            feedback_correct = 'e'
                        elif (trialType == 2) or (trialType == 3):
                            required_allowed = 'e'
                            required_correct = 'e'
                            feedback_allowed = 'i'
                            feedback_correct = 'i'
                    elif rand_positions == 2:
                        response_option_left = response_option_A
                        response_option_right = response_option_B
                        if (trialType == 1) or (trialType == 4):
                            required_allowed = 'e'
                            required_correct = 'e'
                            feedback_allowed = 'i'
                            feedback_correct = 'i'
                        elif (trialType == 2) or (trialType == 3):
                            required_allowed = 'i'
                            required_correct = 'i'
                            feedback_allowed = 'e'
                            feedback_correct = 'e'
                image_stimulus1_box_A.setPos(image_stimulus1_location)
                image_stimulus1_box_A.setImage(img_stimulus1)
                image_stimulus2_box_A.setPos(image_stimulus2_location)
                image_stimulus2_box_A.setImage(img_stimulus2)
                stimulus1_box_A.setPos(stimulus1_location)
                stimulus1_box_A.setText(stimulus1)
                stimulus2_box_A.setPos(stimulus2_location)
                stimulus2_box_A.setText(stimulus2)
                required_response_A.keys = []
                required_response_A.rt = []
                _required_response_A_allKeys = []
                feedback_response_A.keys = []
                feedback_response_A.rt = []
                _feedback_response_A_allKeys = []
                left_box_A.setPos(response_option_left_location)
                left_box_A.setText(response_option_left)
                right_box_A.setPos(response_option_right_location)
                right_box_A.setText(response_option_right)
                accuracy_feedback_box_A.setPos(accuracy_feedback_location)
                # keep track of which components have finished
                trial_AComponents = [image_stimulus1_box_A, image_stimulus2_box_A, stimulus1_box_A, stimulus2_box_A, required_response_A, feedback_response_A, left_box_A, right_box_A, accuracy_feedback_box_A]
                for thisComponent in trial_AComponents:
                    thisComponent.tStart = None
                    thisComponent.tStop = None
                    thisComponent.tStartRefresh = None
                    thisComponent.tStopRefresh = None
                    if hasattr(thisComponent, 'status'):
                        thisComponent.status = NOT_STARTED
                # reset timers
                t = 0
                _timeToFirstFrame = win.getFutureFlipTime(clock="now")
                frameN = -1
                
                # --- Run Routine "trial_A" ---
                while continueRoutine:
                    # get current time
                    t = routineTimer.getTime()
                    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                    # update/draw components on each frame
                    # Run 'Each Frame' code from trial_code_A
                    # Accuracy feedback message
                    if len(feedback_response_A.keys)<1:
                        accuracyFeedback=""
                    else:
                        accuracyFeedback="X"
                    
                    # *image_stimulus1_box_A* updates
                    if image_stimulus1_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                        # keep track of start time/frame for later
                        image_stimulus1_box_A.frameNStart = frameN  # exact frame index
                        image_stimulus1_box_A.tStart = t  # local t and not account for scr refresh
                        image_stimulus1_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(image_stimulus1_box_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_stimulus1_box_A.started')
                        image_stimulus1_box_A.setAutoDraw(True)
                    
                    # *image_stimulus2_box_A* updates
                    if image_stimulus2_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                        # keep track of start time/frame for later
                        image_stimulus2_box_A.frameNStart = frameN  # exact frame index
                        image_stimulus2_box_A.tStart = t  # local t and not account for scr refresh
                        image_stimulus2_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(image_stimulus2_box_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_stimulus2_box_A.started')
                        image_stimulus2_box_A.setAutoDraw(True)
                    
                    # *stimulus1_box_A* updates
                    if stimulus1_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                        # keep track of start time/frame for later
                        stimulus1_box_A.frameNStart = frameN  # exact frame index
                        stimulus1_box_A.tStart = t  # local t and not account for scr refresh
                        stimulus1_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(stimulus1_box_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'stimulus1_box_A.started')
                        stimulus1_box_A.setAutoDraw(True)
                    
                    # *stimulus2_box_A* updates
                    if stimulus2_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                        # keep track of start time/frame for later
                        stimulus2_box_A.frameNStart = frameN  # exact frame index
                        stimulus2_box_A.tStart = t  # local t and not account for scr refresh
                        stimulus2_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(stimulus2_box_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'stimulus2_box_A.started')
                        stimulus2_box_A.setAutoDraw(True)
                    
                    # *required_response_A* updates
                    waitOnFlip = False
                    if required_response_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                        # keep track of start time/frame for later
                        required_response_A.frameNStart = frameN  # exact frame index
                        required_response_A.tStart = t  # local t and not account for scr refresh
                        required_response_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(required_response_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'required_response_A.started')
                        required_response_A.status = STARTED
                        # AllowedKeys looks like a variable named `required_allowed`
                        if not type(required_allowed) in [list, tuple, np.ndarray]:
                            if not isinstance(required_allowed, str):
                                logging.error('AllowedKeys variable `required_allowed` is not string- or list-like.')
                                core.quit()
                            elif not ',' in required_allowed:
                                required_allowed = (required_allowed,)
                            else:
                                required_allowed = eval(required_allowed)
                        # keyboard checking is just starting
                        waitOnFlip = True
                        win.callOnFlip(required_response_A.clock.reset)  # t=0 on next screen flip
                        win.callOnFlip(required_response_A.clearEvents, eventType='keyboard')  # clear events on next screen flip
                    if required_response_A.status == STARTED and not waitOnFlip:
                        theseKeys = required_response_A.getKeys(keyList=list(required_allowed), waitRelease=False)
                        _required_response_A_allKeys.extend(theseKeys)
                        if len(_required_response_A_allKeys):
                            required_response_A.keys = _required_response_A_allKeys[0].name  # just the first key pressed
                            required_response_A.rt = _required_response_A_allKeys[0].rt
                            # was this correct?
                            if (required_response_A.keys == str(required_correct)) or (required_response_A.keys == required_correct):
                                required_response_A.corr = 1
                            else:
                                required_response_A.corr = 0
                            # a response ends the routine
                            continueRoutine = False
                    
                    # *feedback_response_A* updates
                    waitOnFlip = False
                    if feedback_response_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                        # keep track of start time/frame for later
                        feedback_response_A.frameNStart = frameN  # exact frame index
                        feedback_response_A.tStart = t  # local t and not account for scr refresh
                        feedback_response_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(feedback_response_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'feedback_response_A.started')
                        feedback_response_A.status = STARTED
                        # AllowedKeys looks like a variable named `feedback_allowed`
                        if not type(feedback_allowed) in [list, tuple, np.ndarray]:
                            if not isinstance(feedback_allowed, str):
                                logging.error('AllowedKeys variable `feedback_allowed` is not string- or list-like.')
                                core.quit()
                            elif not ',' in feedback_allowed:
                                feedback_allowed = (feedback_allowed,)
                            else:
                                feedback_allowed = eval(feedback_allowed)
                        # keyboard checking is just starting
                        waitOnFlip = True
                        win.callOnFlip(feedback_response_A.clock.reset)  # t=0 on next screen flip
                        win.callOnFlip(feedback_response_A.clearEvents, eventType='keyboard')  # clear events on next screen flip
                    if feedback_response_A.status == STARTED and not waitOnFlip:
                        theseKeys = feedback_response_A.getKeys(keyList=list(feedback_allowed), waitRelease=False)
                        _feedback_response_A_allKeys.extend(theseKeys)
                        if len(_feedback_response_A_allKeys):
                            feedback_response_A.keys = _feedback_response_A_allKeys[0].name  # just the first key pressed
                            feedback_response_A.rt = _feedback_response_A_allKeys[0].rt
                            # was this correct?
                            if (feedback_response_A.keys == str(feedback_correct)) or (feedback_response_A.keys == feedback_correct):
                                feedback_response_A.corr = 1
                            else:
                                feedback_response_A.corr = 0
                    
                    # *left_box_A* updates
                    if left_box_A.status == NOT_STARTED and tThisFlip >= response_option_onset-frameTolerance:
                        # keep track of start time/frame for later
                        left_box_A.frameNStart = frameN  # exact frame index
                        left_box_A.tStart = t  # local t and not account for scr refresh
                        left_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(left_box_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'left_box_A.started')
                        left_box_A.setAutoDraw(True)
                    
                    # *right_box_A* updates
                    if right_box_A.status == NOT_STARTED and tThisFlip >= response_option_onset-frameTolerance:
                        # keep track of start time/frame for later
                        right_box_A.frameNStart = frameN  # exact frame index
                        right_box_A.tStart = t  # local t and not account for scr refresh
                        right_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(right_box_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'right_box_A.started')
                        right_box_A.setAutoDraw(True)
                    
                    # *accuracy_feedback_box_A* updates
                    if accuracy_feedback_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                        # keep track of start time/frame for later
                        accuracy_feedback_box_A.frameNStart = frameN  # exact frame index
                        accuracy_feedback_box_A.tStart = t  # local t and not account for scr refresh
                        accuracy_feedback_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(accuracy_feedback_box_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'accuracy_feedback_box_A.started')
                        accuracy_feedback_box_A.setAutoDraw(True)
                    if accuracy_feedback_box_A.status == STARTED:  # only update if drawing
                        accuracy_feedback_box_A.setText(accuracyFeedback, log=False)
                    
                    # check for quit (typically the Esc key)
                    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                        core.quit()
                    
                    # check if all components have finished
                    if not continueRoutine:  # a component has requested a forced-end of Routine
                        routineForceEnded = True
                        break
                    continueRoutine = False  # will revert to True if at least one component still running
                    for thisComponent in trial_AComponents:
                        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                            continueRoutine = True
                            break  # at least one component has not yet finished
                    
                    # refresh the screen
                    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                        win.flip()
                
                # --- Ending Routine "trial_A" ---
                for thisComponent in trial_AComponents:
                    if hasattr(thisComponent, "setAutoDraw"):
                        thisComponent.setAutoDraw(False)
                # Run 'End Routine' code from trial_code_A
                # save exemplars to experiment handler so they're written to the csv file
                thisExp.addData('stimulus1', stimulus1)
                thisExp.addData('stimulus2', stimulus2)
                thisExp.addData('img_stimulus1', img_stimulus1)
                thisExp.addData('img_stimulus2', img_stimulus2)
                thisExp.addData('response_option_left', response_option_left)
                thisExp.addData('response_option_right', response_option_right)
                # check responses
                if required_response_A.keys in ['', [], None]:  # No response was made
                    required_response_A.keys = None
                    # was no response the correct answer?!
                    if str(required_correct).lower() == 'none':
                       required_response_A.corr = 1;  # correct non-response
                    else:
                       required_response_A.corr = 0;  # failed to respond (incorrectly)
                # store data for practice_trials_Afirst (TrialHandler)
                practice_trials_Afirst.addData('required_response_A.keys',required_response_A.keys)
                practice_trials_Afirst.addData('required_response_A.corr', required_response_A.corr)
                if required_response_A.keys != None:  # we had a response
                    practice_trials_Afirst.addData('required_response_A.rt', required_response_A.rt)
                # check responses
                if feedback_response_A.keys in ['', [], None]:  # No response was made
                    feedback_response_A.keys = None
                    # was no response the correct answer?!
                    if str(feedback_correct).lower() == 'none':
                       feedback_response_A.corr = 1;  # correct non-response
                    else:
                       feedback_response_A.corr = 0;  # failed to respond (incorrectly)
                # store data for practice_trials_Afirst (TrialHandler)
                practice_trials_Afirst.addData('feedback_response_A.keys',feedback_response_A.keys)
                practice_trials_Afirst.addData('feedback_response_A.corr', feedback_response_A.corr)
                if feedback_response_A.keys != None:  # we had a response
                    practice_trials_Afirst.addData('feedback_response_A.rt', feedback_response_A.rt)
                # the Routine "trial_A" was not non-slip safe, so reset the non-slip timer
                routineTimer.reset()
                thisExp.nextEntry()
                
            # completed reptitions repeats of 'practice_trials_Afirst'
            
            
            # --- Prepare to start Routine "practice_postblock_A" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            # Run 'Begin Routine' code from practice_postblock_code_A
            # Option to simulates using ResponseEmulator:
            if Monkey:
                simulated_responses = [(1.1, 'e'), (1.1, 'i')]  # simulated responses take the form (onsetTime, responseKey). You can simulate more than one.
                responder = ResponseEmulator(simulated_responses)
                responder.start()
            
            # calculate summary stats
            if(starting_block == 'a'):  
                prac_block_A_percentage_accuracy = (float(practice_trials_Afirst.data['required_response_A.corr'].count()) - float(practice_trials_Afirst.data['feedback_response_A.corr'].sum())) /  float(practice_trials_Afirst.data['required_response_A.corr'].count()) * 100 
                prac_block_A_median_latency = np.median(practice_trials_Afirst.data['required_response_A.rt'])
            
            if(starting_block == 'b'):  
                prac_block_A_percentage_accuracy = (float(practice_trials_Asecond.data['required_response_A.corr'].count()) - float(practice_trials_Asecond.data['feedback_response_A.corr'].sum())) /  float(practice_trials_Asecond.data['required_response_A.corr'].count()) * 100 
                prac_block_A_median_latency = np.median(practice_trials_Asecond.data['required_response_A.rt'])
            
            # set messages
            msg_accuracy = "%s %i %s" %(accuracy, prac_block_A_percentage_accuracy, percentCorrect) 
            msg_latency = "%s %.2f %s" %(speed, prac_block_A_median_latency, seconds)
            
            ### save summary stats to experiment handler so they're written to the csv file
            ##thisExp.addData('prac_block_A_percentage_accuracy', prac_block_A_percentage_accuracy)
            ##thisExp.addData('prac_block_A_median_latency', prac_block_A_median_latency)
            practice_aim_box_A.setText(aim)
            practice_accuracy_box_A.setText(msg_accuracy)
            practice_latency_box_A.setText(msg_latency)
            press_box_prac_A.setText(press_message)
            practice_postblock_response_A.keys = []
            practice_postblock_response_A.rt = []
            _practice_postblock_response_A_allKeys = []
            # keep track of which components have finished
            practice_postblock_AComponents = [practice_aim_box_A, practice_accuracy_box_A, practice_latency_box_A, press_box_prac_A, practice_postblock_response_A]
            for thisComponent in practice_postblock_AComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "practice_postblock_A" ---
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *practice_aim_box_A* updates
                if practice_aim_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    practice_aim_box_A.frameNStart = frameN  # exact frame index
                    practice_aim_box_A.tStart = t  # local t and not account for scr refresh
                    practice_aim_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(practice_aim_box_A, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'practice_aim_box_A.started')
                    practice_aim_box_A.setAutoDraw(True)
                
                # *practice_accuracy_box_A* updates
                if practice_accuracy_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    practice_accuracy_box_A.frameNStart = frameN  # exact frame index
                    practice_accuracy_box_A.tStart = t  # local t and not account for scr refresh
                    practice_accuracy_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(practice_accuracy_box_A, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'practice_accuracy_box_A.started')
                    practice_accuracy_box_A.setAutoDraw(True)
                
                # *practice_latency_box_A* updates
                if practice_latency_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    practice_latency_box_A.frameNStart = frameN  # exact frame index
                    practice_latency_box_A.tStart = t  # local t and not account for scr refresh
                    practice_latency_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(practice_latency_box_A, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'practice_latency_box_A.started')
                    practice_latency_box_A.setAutoDraw(True)
                
                # *press_box_prac_A* updates
                if press_box_prac_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    press_box_prac_A.frameNStart = frameN  # exact frame index
                    press_box_prac_A.tStart = t  # local t and not account for scr refresh
                    press_box_prac_A.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(press_box_prac_A, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'press_box_prac_A.started')
                    press_box_prac_A.setAutoDraw(True)
                
                # *practice_postblock_response_A* updates
                waitOnFlip = False
                if practice_postblock_response_A.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
                    # keep track of start time/frame for later
                    practice_postblock_response_A.frameNStart = frameN  # exact frame index
                    practice_postblock_response_A.tStart = t  # local t and not account for scr refresh
                    practice_postblock_response_A.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(practice_postblock_response_A, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'practice_postblock_response_A.started')
                    practice_postblock_response_A.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(practice_postblock_response_A.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(practice_postblock_response_A.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if practice_postblock_response_A.status == STARTED and not waitOnFlip:
                    theseKeys = practice_postblock_response_A.getKeys(keyList=['e', 'i'], waitRelease=False)
                    _practice_postblock_response_A_allKeys.extend(theseKeys)
                    if len(_practice_postblock_response_A_allKeys):
                        practice_postblock_response_A.keys = _practice_postblock_response_A_allKeys[-1].name  # just the last key pressed
                        practice_postblock_response_A.rt = _practice_postblock_response_A_allKeys[-1].rt
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in practice_postblock_AComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "practice_postblock_A" ---
            for thisComponent in practice_postblock_AComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "practice_postblock_A" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
        # completed Afirst_nReps repeats of 'practice_Afirst'
        
        
        # --- Prepare to start Routine "preblock_B" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from preblock_B_code
        # Option to simulates using ResponseEmulator:
        if Monkey:
            simulated_responses = [(1.1, 'e'), (1.1, 'i')]  # simulated responses take the form (onsetTime, responseKey). You can simulate more than one.
            responder = ResponseEmulator(simulated_responses)
            responder.start()
        
        # Generate list of stimuli for the block
        stim1_catA_stimuli_many = generate_trials('labelA_stimuli', 2, True)  # function and variable determined at begin exp.
        stim1_catB_stimuli_many = generate_trials('labelB_stimuli', 2, True)
        stim2_catA_stimuli_many = generate_trials('targetA_stimuli', 2, True)
        stim2_catB_stimuli_many = generate_trials('targetB_stimuli', 2, True)
        img_stim1_catA_stimuli_many = generate_trials('labelA_image_stimuli', 2, True)
        img_stim1_catB_stimuli_many = generate_trials('labelB_image_stimuli', 2, True)
        img_stim2_catA_stimuli_many = generate_trials('targetA_image_stimuli', 2, True)
        img_stim2_catB_stimuli_many = generate_trials('targetB_image_stimuli', 2, True)
        rule_box_B.setText(rule_B)
        preblock_response_B.keys = []
        preblock_response_B.rt = []
        _preblock_response_B_allKeys = []
        # keep track of which components have finished
        preblock_BComponents = [rule_box_B, preblock_response_B]
        for thisComponent in preblock_BComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "preblock_B" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *rule_box_B* updates
            if rule_box_B.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                # keep track of start time/frame for later
                rule_box_B.frameNStart = frameN  # exact frame index
                rule_box_B.tStart = t  # local t and not account for scr refresh
                rule_box_B.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(rule_box_B, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'rule_box_B.started')
                rule_box_B.setAutoDraw(True)
            
            # *preblock_response_B* updates
            waitOnFlip = False
            if preblock_response_B.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
                # keep track of start time/frame for later
                preblock_response_B.frameNStart = frameN  # exact frame index
                preblock_response_B.tStart = t  # local t and not account for scr refresh
                preblock_response_B.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(preblock_response_B, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'preblock_response_B.started')
                preblock_response_B.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(preblock_response_B.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(preblock_response_B.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if preblock_response_B.status == STARTED and not waitOnFlip:
                theseKeys = preblock_response_B.getKeys(keyList=['e', 'i'], waitRelease=False)
                _preblock_response_B_allKeys.extend(theseKeys)
                if len(_preblock_response_B_allKeys):
                    preblock_response_B.keys = _preblock_response_B_allKeys[-1].name  # just the last key pressed
                    preblock_response_B.rt = _preblock_response_B_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in preblock_BComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "preblock_B" ---
        for thisComponent in preblock_BComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "preblock_B" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        practice_trials_B = data.TrialHandler(nReps=reptitions, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions('block_layout.xlsx'),
            seed=None, name='practice_trials_B')
        thisExp.addLoop(practice_trials_B)  # add the loop to the experiment
        thisPractice_trials_B = practice_trials_B.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisPractice_trials_B.rgb)
        if thisPractice_trials_B != None:
            for paramName in thisPractice_trials_B:
                exec('{} = thisPractice_trials_B[paramName]'.format(paramName))
        
        for thisPractice_trials_B in practice_trials_B:
            currentLoop = practice_trials_B
            # abbreviate parameter names if possible (e.g. rgb = thisPractice_trials_B.rgb)
            if thisPractice_trials_B != None:
                for paramName in thisPractice_trials_B:
                    exec('{} = thisPractice_trials_B[paramName]'.format(paramName))
            
            # --- Prepare to start Routine "trial_B" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            # Run 'Begin Routine' code from trial_code_B
            # Option to simulates using ResponseEmulator:
            if Monkey:
                simulated_responses = [(0.5, 'e'), (0.5, 'i')]  # simulated responses take the form (onsetTime, responseKey). You can simulate more than one.
                responder = ResponseEmulator(simulated_responses)
                responder.start()
            
            # For each stimlulus, choose a random exemplar from the appropriate list
            # word stimulus 1
            if stimulus1_category == 'a':
                stimulus1 = stim1_catA_stimuli_many.pop()
            elif stimulus1_category == 'b':
                stimulus1 = stim1_catB_stimuli_many.pop()
            
            # word stimulus 2
            if stimulus2_category == 'c':
                stimulus2 = stim2_catA_stimuli_many.pop()
            elif stimulus2_category == 'd':
                stimulus2 = stim2_catB_stimuli_many.pop()
            
            # image stimulus 1
            if stimulus1_category == 'a':
                img_stimulus1 = img_stim1_catA_stimuli_many.pop()
            elif stimulus1_category == 'b':
                img_stimulus1 = img_stim1_catB_stimuli_many.pop()
            
            # image stimulus 2
            if stimulus2_category == 'c':
                img_stimulus2 = img_stim2_catA_stimuli_many.pop()
            elif stimulus2_category == 'd':
                img_stimulus2 = img_stim2_catB_stimuli_many.pop()
            
            # set correct and incorrect responses
            if moving_response_options == False:
                response_option_left = response_option_B  # i.e., the focal trial type is the right hand one, for hand dominance
                response_option_right = response_option_A
                response_option_onset = 0  # response options are onscreen constantly
                if (trialType == 1) or (trialType == 4):
                    required_allowed = 'e'  # PATTERN REVERED FROM BLOCK A
                    required_correct = 'e'
                    feedback_allowed = 'i'
                    feedback_correct = 'i'
                elif (trialType == 2) or (trialType == 3):
                    required_allowed = 'i'  # PATTERN REVERED FROM BLOCK A
                    required_correct = 'i'
                    feedback_allowed = 'e'
                    feedback_correct = 'e'
            elif moving_response_options == True:
                rand_positions = randint(1, 3)
                response_option_onset = 0.4  # response options appear with stimuli
                if rand_positions == 1:
                    response_option_left = response_option_B
                    response_option_right = response_option_A
                    if (trialType == 1) or (trialType == 4):
                        required_allowed = 'e'  # PATTERN REVERED FROM BLOCK A
                        required_correct = 'e'
                        feedback_allowed = 'i'
                        feedback_correct = 'i'
                    elif (trialType == 2) or (trialType == 3):
                        required_allowed = 'i'  # PATTERN REVERED FROM BLOCK A
                        required_correct = 'i'
                        feedback_allowed = 'e'
                        feedback_correct = 'e'
                elif rand_positions == 2:
                    response_option_left = response_option_A
                    response_option_right = response_option_B
                    if (trialType == 1) or (trialType == 4):
                        required_allowed = 'i'  # PATTERN REVERED FROM BLOCK A
                        required_correct = 'i'
                        feedback_allowed = 'e'
                        feedback_correct = 'e'
                    elif (trialType == 2) or (trialType == 3):
                        required_allowed = 'e'  # PATTERN REVERED FROM BLOCK A
                        required_correct = 'e'
                        feedback_allowed = 'i'
                        feedback_correct = 'i'
            image_stimulus1_box_B.setPos(image_stimulus1_location)
            image_stimulus1_box_B.setImage(img_stimulus1)
            image_stimulus2_box_B.setPos(image_stimulus2_location)
            image_stimulus2_box_B.setImage(img_stimulus2)
            stimulus1_box_B.setPos(stimulus1_location)
            stimulus1_box_B.setText(stimulus1)
            stimulus2_box_B.setPos(stimulus2_location)
            stimulus2_box_B.setText(stimulus2)
            required_response_B.keys = []
            required_response_B.rt = []
            _required_response_B_allKeys = []
            feedback_response_B.keys = []
            feedback_response_B.rt = []
            _feedback_response_B_allKeys = []
            left_box_B.setPos(response_option_left_location)
            left_box_B.setText(response_option_left)
            right_box_B.setPos(response_option_right_location)
            right_box_B.setText(response_option_right)
            accuracy_feedback_box_B.setPos(accuracy_feedback_location)
            # keep track of which components have finished
            trial_BComponents = [image_stimulus1_box_B, image_stimulus2_box_B, stimulus1_box_B, stimulus2_box_B, required_response_B, feedback_response_B, left_box_B, right_box_B, accuracy_feedback_box_B]
            for thisComponent in trial_BComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "trial_B" ---
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                # Run 'Each Frame' code from trial_code_B
                # Accuracy feedback message
                if len(feedback_response_B.keys)<1:
                    accuracyFeedback=""
                else:
                    accuracyFeedback="X"
                
                # *image_stimulus1_box_B* updates
                if image_stimulus1_box_B.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    image_stimulus1_box_B.frameNStart = frameN  # exact frame index
                    image_stimulus1_box_B.tStart = t  # local t and not account for scr refresh
                    image_stimulus1_box_B.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_stimulus1_box_B, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_stimulus1_box_B.started')
                    image_stimulus1_box_B.setAutoDraw(True)
                
                # *image_stimulus2_box_B* updates
                if image_stimulus2_box_B.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    image_stimulus2_box_B.frameNStart = frameN  # exact frame index
                    image_stimulus2_box_B.tStart = t  # local t and not account for scr refresh
                    image_stimulus2_box_B.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_stimulus2_box_B, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_stimulus2_box_B.started')
                    image_stimulus2_box_B.setAutoDraw(True)
                
                # *stimulus1_box_B* updates
                if stimulus1_box_B.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    stimulus1_box_B.frameNStart = frameN  # exact frame index
                    stimulus1_box_B.tStart = t  # local t and not account for scr refresh
                    stimulus1_box_B.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(stimulus1_box_B, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'stimulus1_box_B.started')
                    stimulus1_box_B.setAutoDraw(True)
                
                # *stimulus2_box_B* updates
                if stimulus2_box_B.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    stimulus2_box_B.frameNStart = frameN  # exact frame index
                    stimulus2_box_B.tStart = t  # local t and not account for scr refresh
                    stimulus2_box_B.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(stimulus2_box_B, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'stimulus2_box_B.started')
                    stimulus2_box_B.setAutoDraw(True)
                
                # *required_response_B* updates
                waitOnFlip = False
                if required_response_B.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    required_response_B.frameNStart = frameN  # exact frame index
                    required_response_B.tStart = t  # local t and not account for scr refresh
                    required_response_B.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(required_response_B, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'required_response_B.started')
                    required_response_B.status = STARTED
                    # AllowedKeys looks like a variable named `required_allowed`
                    if not type(required_allowed) in [list, tuple, np.ndarray]:
                        if not isinstance(required_allowed, str):
                            logging.error('AllowedKeys variable `required_allowed` is not string- or list-like.')
                            core.quit()
                        elif not ',' in required_allowed:
                            required_allowed = (required_allowed,)
                        else:
                            required_allowed = eval(required_allowed)
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(required_response_B.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(required_response_B.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if required_response_B.status == STARTED and not waitOnFlip:
                    theseKeys = required_response_B.getKeys(keyList=list(required_allowed), waitRelease=False)
                    _required_response_B_allKeys.extend(theseKeys)
                    if len(_required_response_B_allKeys):
                        required_response_B.keys = _required_response_B_allKeys[0].name  # just the first key pressed
                        required_response_B.rt = _required_response_B_allKeys[0].rt
                        # was this correct?
                        if (required_response_B.keys == str(required_correct)) or (required_response_B.keys == required_correct):
                            required_response_B.corr = 1
                        else:
                            required_response_B.corr = 0
                        # a response ends the routine
                        continueRoutine = False
                
                # *feedback_response_B* updates
                waitOnFlip = False
                if feedback_response_B.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    feedback_response_B.frameNStart = frameN  # exact frame index
                    feedback_response_B.tStart = t  # local t and not account for scr refresh
                    feedback_response_B.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(feedback_response_B, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'feedback_response_B.started')
                    feedback_response_B.status = STARTED
                    # AllowedKeys looks like a variable named `feedback_allowed`
                    if not type(feedback_allowed) in [list, tuple, np.ndarray]:
                        if not isinstance(feedback_allowed, str):
                            logging.error('AllowedKeys variable `feedback_allowed` is not string- or list-like.')
                            core.quit()
                        elif not ',' in feedback_allowed:
                            feedback_allowed = (feedback_allowed,)
                        else:
                            feedback_allowed = eval(feedback_allowed)
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(feedback_response_B.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(feedback_response_B.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if feedback_response_B.status == STARTED and not waitOnFlip:
                    theseKeys = feedback_response_B.getKeys(keyList=list(feedback_allowed), waitRelease=False)
                    _feedback_response_B_allKeys.extend(theseKeys)
                    if len(_feedback_response_B_allKeys):
                        feedback_response_B.keys = _feedback_response_B_allKeys[0].name  # just the first key pressed
                        feedback_response_B.rt = _feedback_response_B_allKeys[0].rt
                        # was this correct?
                        if (feedback_response_B.keys == str(feedback_correct)) or (feedback_response_B.keys == feedback_correct):
                            feedback_response_B.corr = 1
                        else:
                            feedback_response_B.corr = 0
                
                # *left_box_B* updates
                if left_box_B.status == NOT_STARTED and tThisFlip >= response_option_onset-frameTolerance:
                    # keep track of start time/frame for later
                    left_box_B.frameNStart = frameN  # exact frame index
                    left_box_B.tStart = t  # local t and not account for scr refresh
                    left_box_B.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(left_box_B, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'left_box_B.started')
                    left_box_B.setAutoDraw(True)
                
                # *right_box_B* updates
                if right_box_B.status == NOT_STARTED and tThisFlip >= response_option_onset-frameTolerance:
                    # keep track of start time/frame for later
                    right_box_B.frameNStart = frameN  # exact frame index
                    right_box_B.tStart = t  # local t and not account for scr refresh
                    right_box_B.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(right_box_B, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'right_box_B.started')
                    right_box_B.setAutoDraw(True)
                
                # *accuracy_feedback_box_B* updates
                if accuracy_feedback_box_B.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    accuracy_feedback_box_B.frameNStart = frameN  # exact frame index
                    accuracy_feedback_box_B.tStart = t  # local t and not account for scr refresh
                    accuracy_feedback_box_B.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(accuracy_feedback_box_B, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'accuracy_feedback_box_B.started')
                    accuracy_feedback_box_B.setAutoDraw(True)
                if accuracy_feedback_box_B.status == STARTED:  # only update if drawing
                    accuracy_feedback_box_B.setText(accuracyFeedback, log=False)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in trial_BComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "trial_B" ---
            for thisComponent in trial_BComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # Run 'End Routine' code from trial_code_B
            # save exemplars to experiment handler so they're written to the csv file
            thisExp.addData('stimulus1', stimulus1)
            thisExp.addData('stimulus2', stimulus2)
            thisExp.addData('img_stimulus1', img_stimulus1)
            thisExp.addData('img_stimulus2', img_stimulus2)
            thisExp.addData('response_option_left', response_option_left)
            thisExp.addData('response_option_right', response_option_right)
            # check responses
            if required_response_B.keys in ['', [], None]:  # No response was made
                required_response_B.keys = None
                # was no response the correct answer?!
                if str(required_correct).lower() == 'none':
                   required_response_B.corr = 1;  # correct non-response
                else:
                   required_response_B.corr = 0;  # failed to respond (incorrectly)
            # store data for practice_trials_B (TrialHandler)
            practice_trials_B.addData('required_response_B.keys',required_response_B.keys)
            practice_trials_B.addData('required_response_B.corr', required_response_B.corr)
            if required_response_B.keys != None:  # we had a response
                practice_trials_B.addData('required_response_B.rt', required_response_B.rt)
            # check responses
            if feedback_response_B.keys in ['', [], None]:  # No response was made
                feedback_response_B.keys = None
                # was no response the correct answer?!
                if str(feedback_correct).lower() == 'none':
                   feedback_response_B.corr = 1;  # correct non-response
                else:
                   feedback_response_B.corr = 0;  # failed to respond (incorrectly)
            # store data for practice_trials_B (TrialHandler)
            practice_trials_B.addData('feedback_response_B.keys',feedback_response_B.keys)
            practice_trials_B.addData('feedback_response_B.corr', feedback_response_B.corr)
            if feedback_response_B.keys != None:  # we had a response
                practice_trials_B.addData('feedback_response_B.rt', feedback_response_B.rt)
            # the Routine "trial_B" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
        # completed reptitions repeats of 'practice_trials_B'
        
        
        # --- Prepare to start Routine "practice_postblock_B" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from practice_postblock_code_B
        # Option to simulates using ResponseEmulator:
        if Monkey:
            simulated_responses = [(1.1, 'e'), (1.1, 'i')]  # simulated responses take the form (onsetTime, responseKey). You can simulate more than one.
            responder = ResponseEmulator(simulated_responses)
            responder.start()
        
        # calculate summary stats
        prac_block_B_percentage_accuracy = (float(practice_trials_B.data['required_response_B.corr'].count()) - float(practice_trials_B.data['feedback_response_B.corr'].sum())) /  float(practice_trials_B.data['required_response_B.corr'].count()) * 100 
        prac_block_B_median_latency = np.median(practice_trials_B.data['required_response_B.rt'])
        
        # set messages
        msg_accuracy = "%s %i %s" %(accuracy, prac_block_B_percentage_accuracy, percentCorrect) 
        msg_latency = "%s %.2f %s" %(speed, prac_block_B_median_latency, seconds)
        
        ### save summary stats to experiment handler so they're written to the csv file
        ##thisExp.addData('prac_block_B_percentage_accuracy', prac_block_B_percentage_accuracy)
        ##thisExp.addData('prac_block_B_median_latency', prac_block_B_median_latency)
        practice_aim_box_B.setText(aim)
        practice_accuracy_box_B.setText(msg_accuracy)
        practice_latency_box_B.setText(msg_latency)
        press_box_prac_B.setText(press_message)
        practice_postblock_response_B.keys = []
        practice_postblock_response_B.rt = []
        _practice_postblock_response_B_allKeys = []
        # keep track of which components have finished
        practice_postblock_BComponents = [practice_aim_box_B, practice_accuracy_box_B, practice_latency_box_B, press_box_prac_B, practice_postblock_response_B]
        for thisComponent in practice_postblock_BComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "practice_postblock_B" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *practice_aim_box_B* updates
            if practice_aim_box_B.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                # keep track of start time/frame for later
                practice_aim_box_B.frameNStart = frameN  # exact frame index
                practice_aim_box_B.tStart = t  # local t and not account for scr refresh
                practice_aim_box_B.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(practice_aim_box_B, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'practice_aim_box_B.started')
                practice_aim_box_B.setAutoDraw(True)
            
            # *practice_accuracy_box_B* updates
            if practice_accuracy_box_B.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                # keep track of start time/frame for later
                practice_accuracy_box_B.frameNStart = frameN  # exact frame index
                practice_accuracy_box_B.tStart = t  # local t and not account for scr refresh
                practice_accuracy_box_B.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(practice_accuracy_box_B, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'practice_accuracy_box_B.started')
                practice_accuracy_box_B.setAutoDraw(True)
            
            # *practice_latency_box_B* updates
            if practice_latency_box_B.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                # keep track of start time/frame for later
                practice_latency_box_B.frameNStart = frameN  # exact frame index
                practice_latency_box_B.tStart = t  # local t and not account for scr refresh
                practice_latency_box_B.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(practice_latency_box_B, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'practice_latency_box_B.started')
                practice_latency_box_B.setAutoDraw(True)
            
            # *press_box_prac_B* updates
            if press_box_prac_B.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                # keep track of start time/frame for later
                press_box_prac_B.frameNStart = frameN  # exact frame index
                press_box_prac_B.tStart = t  # local t and not account for scr refresh
                press_box_prac_B.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(press_box_prac_B, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'press_box_prac_B.started')
                press_box_prac_B.setAutoDraw(True)
            
            # *practice_postblock_response_B* updates
            waitOnFlip = False
            if practice_postblock_response_B.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
                # keep track of start time/frame for later
                practice_postblock_response_B.frameNStart = frameN  # exact frame index
                practice_postblock_response_B.tStart = t  # local t and not account for scr refresh
                practice_postblock_response_B.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(practice_postblock_response_B, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'practice_postblock_response_B.started')
                practice_postblock_response_B.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(practice_postblock_response_B.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(practice_postblock_response_B.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if practice_postblock_response_B.status == STARTED and not waitOnFlip:
                theseKeys = practice_postblock_response_B.getKeys(keyList=['e', 'i'], waitRelease=False)
                _practice_postblock_response_B_allKeys.extend(theseKeys)
                if len(_practice_postblock_response_B_allKeys):
                    practice_postblock_response_B.keys = _practice_postblock_response_B_allKeys[-1].name  # just the last key pressed
                    practice_postblock_response_B.rt = _practice_postblock_response_B_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in practice_postblock_BComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "practice_postblock_B" ---
        for thisComponent in practice_postblock_BComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "practice_postblock_B" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        practice_Asecond = data.TrialHandler(nReps=Asecond_nReps, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=[None],
            seed=None, name='practice_Asecond')
        thisExp.addLoop(practice_Asecond)  # add the loop to the experiment
        thisPractice_Asecond = practice_Asecond.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisPractice_Asecond.rgb)
        if thisPractice_Asecond != None:
            for paramName in thisPractice_Asecond:
                exec('{} = thisPractice_Asecond[paramName]'.format(paramName))
        
        for thisPractice_Asecond in practice_Asecond:
            currentLoop = practice_Asecond
            # abbreviate parameter names if possible (e.g. rgb = thisPractice_Asecond.rgb)
            if thisPractice_Asecond != None:
                for paramName in thisPractice_Asecond:
                    exec('{} = thisPractice_Asecond[paramName]'.format(paramName))
            
            # --- Prepare to start Routine "preblock_A" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            # Run 'Begin Routine' code from preblock_A_code
            # Option to simulates using ResponseEmulator:
            if Monkey:
                simulated_responses = [(1.1, 'e'), (1.1, 'i')]  # simulated responses take the form (onsetTime, responseKey). You can simulate more than one.
                responder = ResponseEmulator(simulated_responses)
                responder.start()
            
            # Generate list of stimuli for the block
            stim1_catA_stimuli_many = generate_trials('labelA_stimuli', 2, True)  # function and variable determined at begin exp.
            stim1_catB_stimuli_many = generate_trials('labelB_stimuli', 2, True)
            stim2_catA_stimuli_many = generate_trials('targetA_stimuli', 2, True)
            stim2_catB_stimuli_many = generate_trials('targetB_stimuli', 2, True)
            img_stim1_catA_stimuli_many = generate_trials('labelA_image_stimuli', 2, True)
            img_stim1_catB_stimuli_many = generate_trials('labelB_image_stimuli', 2, True)
            img_stim2_catA_stimuli_many = generate_trials('targetA_image_stimuli', 2, True)
            img_stim2_catB_stimuli_many = generate_trials('targetB_image_stimuli', 2, True)
            
            rule_box_A.setText(rule_A)
            preblock_response_A.keys = []
            preblock_response_A.rt = []
            _preblock_response_A_allKeys = []
            # keep track of which components have finished
            preblock_AComponents = [rule_box_A, preblock_response_A]
            for thisComponent in preblock_AComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "preblock_A" ---
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *rule_box_A* updates
                if rule_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    rule_box_A.frameNStart = frameN  # exact frame index
                    rule_box_A.tStart = t  # local t and not account for scr refresh
                    rule_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(rule_box_A, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'rule_box_A.started')
                    rule_box_A.setAutoDraw(True)
                
                # *preblock_response_A* updates
                waitOnFlip = False
                if preblock_response_A.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
                    # keep track of start time/frame for later
                    preblock_response_A.frameNStart = frameN  # exact frame index
                    preblock_response_A.tStart = t  # local t and not account for scr refresh
                    preblock_response_A.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(preblock_response_A, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'preblock_response_A.started')
                    preblock_response_A.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(preblock_response_A.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(preblock_response_A.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if preblock_response_A.status == STARTED and not waitOnFlip:
                    theseKeys = preblock_response_A.getKeys(keyList=['e', 'i'], waitRelease=False)
                    _preblock_response_A_allKeys.extend(theseKeys)
                    if len(_preblock_response_A_allKeys):
                        preblock_response_A.keys = _preblock_response_A_allKeys[-1].name  # just the last key pressed
                        preblock_response_A.rt = _preblock_response_A_allKeys[-1].rt
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in preblock_AComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "preblock_A" ---
            for thisComponent in preblock_AComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "preblock_A" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # set up handler to look after randomisation of conditions etc
            practice_trials_Asecond = data.TrialHandler(nReps=reptitions, method='random', 
                extraInfo=expInfo, originPath=-1,
                trialList=data.importConditions('block_layout.xlsx'),
                seed=None, name='practice_trials_Asecond')
            thisExp.addLoop(practice_trials_Asecond)  # add the loop to the experiment
            thisPractice_trials_Asecond = practice_trials_Asecond.trialList[0]  # so we can initialise stimuli with some values
            # abbreviate parameter names if possible (e.g. rgb = thisPractice_trials_Asecond.rgb)
            if thisPractice_trials_Asecond != None:
                for paramName in thisPractice_trials_Asecond:
                    exec('{} = thisPractice_trials_Asecond[paramName]'.format(paramName))
            
            for thisPractice_trials_Asecond in practice_trials_Asecond:
                currentLoop = practice_trials_Asecond
                # abbreviate parameter names if possible (e.g. rgb = thisPractice_trials_Asecond.rgb)
                if thisPractice_trials_Asecond != None:
                    for paramName in thisPractice_trials_Asecond:
                        exec('{} = thisPractice_trials_Asecond[paramName]'.format(paramName))
                
                # --- Prepare to start Routine "trial_A" ---
                continueRoutine = True
                routineForceEnded = False
                # update component parameters for each repeat
                # Run 'Begin Routine' code from trial_code_A
                # Option to simulates using ResponseEmulator:
                if Monkey:
                    simulated_responses = [(0.5, 'e'), (0.5, 'i')]  # simulated responses take the form (onsetTime, responseKey). You can simulate more than one.
                    responder = ResponseEmulator(simulated_responses)
                    responder.start()
                
                # For each stimlulus, choose a random exemplar from the appropriate list
                # word stimulus 1
                if stimulus1_category == 'a':
                    stimulus1 = stim1_catA_stimuli_many.pop()
                elif stimulus1_category == 'b':
                    stimulus1 = stim1_catB_stimuli_many.pop()
                
                # word stimulus 2
                if stimulus2_category == 'c':
                    stimulus2 = stim2_catA_stimuli_many.pop()
                elif stimulus2_category == 'd':
                    stimulus2 = stim2_catB_stimuli_many.pop()
                
                # image stimulus 1
                if stimulus1_category == 'a':
                    img_stimulus1 = img_stim1_catA_stimuli_many.pop()
                elif stimulus1_category == 'b':
                    img_stimulus1 = img_stim1_catB_stimuli_many.pop()
                
                # image stimulus 2
                if stimulus2_category == 'c':
                    img_stimulus2 = img_stim2_catA_stimuli_many.pop()
                elif stimulus2_category == 'd':
                    img_stimulus2 = img_stim2_catB_stimuli_many.pop()
                
                # set correct and incorrect responses
                if moving_response_options == False:
                    response_option_left = response_option_B  # i.e., the focal trial type is the right hand one, for hand dominance
                    response_option_right = response_option_A
                    response_option_onset = 0  # response options are onscreen constantly
                    if (trialType == 1) or (trialType == 4):
                        required_allowed = 'i'
                        required_correct = 'i'
                        feedback_allowed = 'e'
                        feedback_correct = 'e'
                    elif (trialType == 2) or (trialType == 3):
                        required_allowed = 'e'
                        required_correct = 'e'
                        feedback_allowed = 'i'
                        feedback_correct = 'i'
                elif moving_response_options == True:
                    rand_positions = randint(1, 3)
                    response_option_onset = 0.4  # response options appear with stimuli
                    if rand_positions == 1:
                        response_option_left = response_option_B
                        response_option_right = response_option_A
                        if (trialType == 1) or (trialType == 4):
                            required_allowed = 'i'
                            required_correct = 'i'
                            feedback_allowed = 'e'
                            feedback_correct = 'e'
                        elif (trialType == 2) or (trialType == 3):
                            required_allowed = 'e'
                            required_correct = 'e'
                            feedback_allowed = 'i'
                            feedback_correct = 'i'
                    elif rand_positions == 2:
                        response_option_left = response_option_A
                        response_option_right = response_option_B
                        if (trialType == 1) or (trialType == 4):
                            required_allowed = 'e'
                            required_correct = 'e'
                            feedback_allowed = 'i'
                            feedback_correct = 'i'
                        elif (trialType == 2) or (trialType == 3):
                            required_allowed = 'i'
                            required_correct = 'i'
                            feedback_allowed = 'e'
                            feedback_correct = 'e'
                image_stimulus1_box_A.setPos(image_stimulus1_location)
                image_stimulus1_box_A.setImage(img_stimulus1)
                image_stimulus2_box_A.setPos(image_stimulus2_location)
                image_stimulus2_box_A.setImage(img_stimulus2)
                stimulus1_box_A.setPos(stimulus1_location)
                stimulus1_box_A.setText(stimulus1)
                stimulus2_box_A.setPos(stimulus2_location)
                stimulus2_box_A.setText(stimulus2)
                required_response_A.keys = []
                required_response_A.rt = []
                _required_response_A_allKeys = []
                feedback_response_A.keys = []
                feedback_response_A.rt = []
                _feedback_response_A_allKeys = []
                left_box_A.setPos(response_option_left_location)
                left_box_A.setText(response_option_left)
                right_box_A.setPos(response_option_right_location)
                right_box_A.setText(response_option_right)
                accuracy_feedback_box_A.setPos(accuracy_feedback_location)
                # keep track of which components have finished
                trial_AComponents = [image_stimulus1_box_A, image_stimulus2_box_A, stimulus1_box_A, stimulus2_box_A, required_response_A, feedback_response_A, left_box_A, right_box_A, accuracy_feedback_box_A]
                for thisComponent in trial_AComponents:
                    thisComponent.tStart = None
                    thisComponent.tStop = None
                    thisComponent.tStartRefresh = None
                    thisComponent.tStopRefresh = None
                    if hasattr(thisComponent, 'status'):
                        thisComponent.status = NOT_STARTED
                # reset timers
                t = 0
                _timeToFirstFrame = win.getFutureFlipTime(clock="now")
                frameN = -1
                
                # --- Run Routine "trial_A" ---
                while continueRoutine:
                    # get current time
                    t = routineTimer.getTime()
                    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                    # update/draw components on each frame
                    # Run 'Each Frame' code from trial_code_A
                    # Accuracy feedback message
                    if len(feedback_response_A.keys)<1:
                        accuracyFeedback=""
                    else:
                        accuracyFeedback="X"
                    
                    # *image_stimulus1_box_A* updates
                    if image_stimulus1_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                        # keep track of start time/frame for later
                        image_stimulus1_box_A.frameNStart = frameN  # exact frame index
                        image_stimulus1_box_A.tStart = t  # local t and not account for scr refresh
                        image_stimulus1_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(image_stimulus1_box_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_stimulus1_box_A.started')
                        image_stimulus1_box_A.setAutoDraw(True)
                    
                    # *image_stimulus2_box_A* updates
                    if image_stimulus2_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                        # keep track of start time/frame for later
                        image_stimulus2_box_A.frameNStart = frameN  # exact frame index
                        image_stimulus2_box_A.tStart = t  # local t and not account for scr refresh
                        image_stimulus2_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(image_stimulus2_box_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_stimulus2_box_A.started')
                        image_stimulus2_box_A.setAutoDraw(True)
                    
                    # *stimulus1_box_A* updates
                    if stimulus1_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                        # keep track of start time/frame for later
                        stimulus1_box_A.frameNStart = frameN  # exact frame index
                        stimulus1_box_A.tStart = t  # local t and not account for scr refresh
                        stimulus1_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(stimulus1_box_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'stimulus1_box_A.started')
                        stimulus1_box_A.setAutoDraw(True)
                    
                    # *stimulus2_box_A* updates
                    if stimulus2_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                        # keep track of start time/frame for later
                        stimulus2_box_A.frameNStart = frameN  # exact frame index
                        stimulus2_box_A.tStart = t  # local t and not account for scr refresh
                        stimulus2_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(stimulus2_box_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'stimulus2_box_A.started')
                        stimulus2_box_A.setAutoDraw(True)
                    
                    # *required_response_A* updates
                    waitOnFlip = False
                    if required_response_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                        # keep track of start time/frame for later
                        required_response_A.frameNStart = frameN  # exact frame index
                        required_response_A.tStart = t  # local t and not account for scr refresh
                        required_response_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(required_response_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'required_response_A.started')
                        required_response_A.status = STARTED
                        # AllowedKeys looks like a variable named `required_allowed`
                        if not type(required_allowed) in [list, tuple, np.ndarray]:
                            if not isinstance(required_allowed, str):
                                logging.error('AllowedKeys variable `required_allowed` is not string- or list-like.')
                                core.quit()
                            elif not ',' in required_allowed:
                                required_allowed = (required_allowed,)
                            else:
                                required_allowed = eval(required_allowed)
                        # keyboard checking is just starting
                        waitOnFlip = True
                        win.callOnFlip(required_response_A.clock.reset)  # t=0 on next screen flip
                        win.callOnFlip(required_response_A.clearEvents, eventType='keyboard')  # clear events on next screen flip
                    if required_response_A.status == STARTED and not waitOnFlip:
                        theseKeys = required_response_A.getKeys(keyList=list(required_allowed), waitRelease=False)
                        _required_response_A_allKeys.extend(theseKeys)
                        if len(_required_response_A_allKeys):
                            required_response_A.keys = _required_response_A_allKeys[0].name  # just the first key pressed
                            required_response_A.rt = _required_response_A_allKeys[0].rt
                            # was this correct?
                            if (required_response_A.keys == str(required_correct)) or (required_response_A.keys == required_correct):
                                required_response_A.corr = 1
                            else:
                                required_response_A.corr = 0
                            # a response ends the routine
                            continueRoutine = False
                    
                    # *feedback_response_A* updates
                    waitOnFlip = False
                    if feedback_response_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                        # keep track of start time/frame for later
                        feedback_response_A.frameNStart = frameN  # exact frame index
                        feedback_response_A.tStart = t  # local t and not account for scr refresh
                        feedback_response_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(feedback_response_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'feedback_response_A.started')
                        feedback_response_A.status = STARTED
                        # AllowedKeys looks like a variable named `feedback_allowed`
                        if not type(feedback_allowed) in [list, tuple, np.ndarray]:
                            if not isinstance(feedback_allowed, str):
                                logging.error('AllowedKeys variable `feedback_allowed` is not string- or list-like.')
                                core.quit()
                            elif not ',' in feedback_allowed:
                                feedback_allowed = (feedback_allowed,)
                            else:
                                feedback_allowed = eval(feedback_allowed)
                        # keyboard checking is just starting
                        waitOnFlip = True
                        win.callOnFlip(feedback_response_A.clock.reset)  # t=0 on next screen flip
                        win.callOnFlip(feedback_response_A.clearEvents, eventType='keyboard')  # clear events on next screen flip
                    if feedback_response_A.status == STARTED and not waitOnFlip:
                        theseKeys = feedback_response_A.getKeys(keyList=list(feedback_allowed), waitRelease=False)
                        _feedback_response_A_allKeys.extend(theseKeys)
                        if len(_feedback_response_A_allKeys):
                            feedback_response_A.keys = _feedback_response_A_allKeys[0].name  # just the first key pressed
                            feedback_response_A.rt = _feedback_response_A_allKeys[0].rt
                            # was this correct?
                            if (feedback_response_A.keys == str(feedback_correct)) or (feedback_response_A.keys == feedback_correct):
                                feedback_response_A.corr = 1
                            else:
                                feedback_response_A.corr = 0
                    
                    # *left_box_A* updates
                    if left_box_A.status == NOT_STARTED and tThisFlip >= response_option_onset-frameTolerance:
                        # keep track of start time/frame for later
                        left_box_A.frameNStart = frameN  # exact frame index
                        left_box_A.tStart = t  # local t and not account for scr refresh
                        left_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(left_box_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'left_box_A.started')
                        left_box_A.setAutoDraw(True)
                    
                    # *right_box_A* updates
                    if right_box_A.status == NOT_STARTED and tThisFlip >= response_option_onset-frameTolerance:
                        # keep track of start time/frame for later
                        right_box_A.frameNStart = frameN  # exact frame index
                        right_box_A.tStart = t  # local t and not account for scr refresh
                        right_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(right_box_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'right_box_A.started')
                        right_box_A.setAutoDraw(True)
                    
                    # *accuracy_feedback_box_A* updates
                    if accuracy_feedback_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                        # keep track of start time/frame for later
                        accuracy_feedback_box_A.frameNStart = frameN  # exact frame index
                        accuracy_feedback_box_A.tStart = t  # local t and not account for scr refresh
                        accuracy_feedback_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(accuracy_feedback_box_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'accuracy_feedback_box_A.started')
                        accuracy_feedback_box_A.setAutoDraw(True)
                    if accuracy_feedback_box_A.status == STARTED:  # only update if drawing
                        accuracy_feedback_box_A.setText(accuracyFeedback, log=False)
                    
                    # check for quit (typically the Esc key)
                    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                        core.quit()
                    
                    # check if all components have finished
                    if not continueRoutine:  # a component has requested a forced-end of Routine
                        routineForceEnded = True
                        break
                    continueRoutine = False  # will revert to True if at least one component still running
                    for thisComponent in trial_AComponents:
                        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                            continueRoutine = True
                            break  # at least one component has not yet finished
                    
                    # refresh the screen
                    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                        win.flip()
                
                # --- Ending Routine "trial_A" ---
                for thisComponent in trial_AComponents:
                    if hasattr(thisComponent, "setAutoDraw"):
                        thisComponent.setAutoDraw(False)
                # Run 'End Routine' code from trial_code_A
                # save exemplars to experiment handler so they're written to the csv file
                thisExp.addData('stimulus1', stimulus1)
                thisExp.addData('stimulus2', stimulus2)
                thisExp.addData('img_stimulus1', img_stimulus1)
                thisExp.addData('img_stimulus2', img_stimulus2)
                thisExp.addData('response_option_left', response_option_left)
                thisExp.addData('response_option_right', response_option_right)
                # check responses
                if required_response_A.keys in ['', [], None]:  # No response was made
                    required_response_A.keys = None
                    # was no response the correct answer?!
                    if str(required_correct).lower() == 'none':
                       required_response_A.corr = 1;  # correct non-response
                    else:
                       required_response_A.corr = 0;  # failed to respond (incorrectly)
                # store data for practice_trials_Asecond (TrialHandler)
                practice_trials_Asecond.addData('required_response_A.keys',required_response_A.keys)
                practice_trials_Asecond.addData('required_response_A.corr', required_response_A.corr)
                if required_response_A.keys != None:  # we had a response
                    practice_trials_Asecond.addData('required_response_A.rt', required_response_A.rt)
                # check responses
                if feedback_response_A.keys in ['', [], None]:  # No response was made
                    feedback_response_A.keys = None
                    # was no response the correct answer?!
                    if str(feedback_correct).lower() == 'none':
                       feedback_response_A.corr = 1;  # correct non-response
                    else:
                       feedback_response_A.corr = 0;  # failed to respond (incorrectly)
                # store data for practice_trials_Asecond (TrialHandler)
                practice_trials_Asecond.addData('feedback_response_A.keys',feedback_response_A.keys)
                practice_trials_Asecond.addData('feedback_response_A.corr', feedback_response_A.corr)
                if feedback_response_A.keys != None:  # we had a response
                    practice_trials_Asecond.addData('feedback_response_A.rt', feedback_response_A.rt)
                # the Routine "trial_A" was not non-slip safe, so reset the non-slip timer
                routineTimer.reset()
                thisExp.nextEntry()
                
            # completed reptitions repeats of 'practice_trials_Asecond'
            
            
            # --- Prepare to start Routine "practice_postblock_A" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            # Run 'Begin Routine' code from practice_postblock_code_A
            # Option to simulates using ResponseEmulator:
            if Monkey:
                simulated_responses = [(1.1, 'e'), (1.1, 'i')]  # simulated responses take the form (onsetTime, responseKey). You can simulate more than one.
                responder = ResponseEmulator(simulated_responses)
                responder.start()
            
            # calculate summary stats
            if(starting_block == 'a'):  
                prac_block_A_percentage_accuracy = (float(practice_trials_Afirst.data['required_response_A.corr'].count()) - float(practice_trials_Afirst.data['feedback_response_A.corr'].sum())) /  float(practice_trials_Afirst.data['required_response_A.corr'].count()) * 100 
                prac_block_A_median_latency = np.median(practice_trials_Afirst.data['required_response_A.rt'])
            
            if(starting_block == 'b'):  
                prac_block_A_percentage_accuracy = (float(practice_trials_Asecond.data['required_response_A.corr'].count()) - float(practice_trials_Asecond.data['feedback_response_A.corr'].sum())) /  float(practice_trials_Asecond.data['required_response_A.corr'].count()) * 100 
                prac_block_A_median_latency = np.median(practice_trials_Asecond.data['required_response_A.rt'])
            
            # set messages
            msg_accuracy = "%s %i %s" %(accuracy, prac_block_A_percentage_accuracy, percentCorrect) 
            msg_latency = "%s %.2f %s" %(speed, prac_block_A_median_latency, seconds)
            
            ### save summary stats to experiment handler so they're written to the csv file
            ##thisExp.addData('prac_block_A_percentage_accuracy', prac_block_A_percentage_accuracy)
            ##thisExp.addData('prac_block_A_median_latency', prac_block_A_median_latency)
            practice_aim_box_A.setText(aim)
            practice_accuracy_box_A.setText(msg_accuracy)
            practice_latency_box_A.setText(msg_latency)
            press_box_prac_A.setText(press_message)
            practice_postblock_response_A.keys = []
            practice_postblock_response_A.rt = []
            _practice_postblock_response_A_allKeys = []
            # keep track of which components have finished
            practice_postblock_AComponents = [practice_aim_box_A, practice_accuracy_box_A, practice_latency_box_A, press_box_prac_A, practice_postblock_response_A]
            for thisComponent in practice_postblock_AComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "practice_postblock_A" ---
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *practice_aim_box_A* updates
                if practice_aim_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    practice_aim_box_A.frameNStart = frameN  # exact frame index
                    practice_aim_box_A.tStart = t  # local t and not account for scr refresh
                    practice_aim_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(practice_aim_box_A, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'practice_aim_box_A.started')
                    practice_aim_box_A.setAutoDraw(True)
                
                # *practice_accuracy_box_A* updates
                if practice_accuracy_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    practice_accuracy_box_A.frameNStart = frameN  # exact frame index
                    practice_accuracy_box_A.tStart = t  # local t and not account for scr refresh
                    practice_accuracy_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(practice_accuracy_box_A, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'practice_accuracy_box_A.started')
                    practice_accuracy_box_A.setAutoDraw(True)
                
                # *practice_latency_box_A* updates
                if practice_latency_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    practice_latency_box_A.frameNStart = frameN  # exact frame index
                    practice_latency_box_A.tStart = t  # local t and not account for scr refresh
                    practice_latency_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(practice_latency_box_A, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'practice_latency_box_A.started')
                    practice_latency_box_A.setAutoDraw(True)
                
                # *press_box_prac_A* updates
                if press_box_prac_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    press_box_prac_A.frameNStart = frameN  # exact frame index
                    press_box_prac_A.tStart = t  # local t and not account for scr refresh
                    press_box_prac_A.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(press_box_prac_A, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'press_box_prac_A.started')
                    press_box_prac_A.setAutoDraw(True)
                
                # *practice_postblock_response_A* updates
                waitOnFlip = False
                if practice_postblock_response_A.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
                    # keep track of start time/frame for later
                    practice_postblock_response_A.frameNStart = frameN  # exact frame index
                    practice_postblock_response_A.tStart = t  # local t and not account for scr refresh
                    practice_postblock_response_A.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(practice_postblock_response_A, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'practice_postblock_response_A.started')
                    practice_postblock_response_A.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(practice_postblock_response_A.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(practice_postblock_response_A.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if practice_postblock_response_A.status == STARTED and not waitOnFlip:
                    theseKeys = practice_postblock_response_A.getKeys(keyList=['e', 'i'], waitRelease=False)
                    _practice_postblock_response_A_allKeys.extend(theseKeys)
                    if len(_practice_postblock_response_A_allKeys):
                        practice_postblock_response_A.keys = _practice_postblock_response_A_allKeys[-1].name  # just the last key pressed
                        practice_postblock_response_A.rt = _practice_postblock_response_A_allKeys[-1].rt
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in practice_postblock_AComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "practice_postblock_A" ---
            for thisComponent in practice_postblock_AComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "practice_postblock_A" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
        # completed Asecond_nReps repeats of 'practice_Asecond'
        
        
        # --- Prepare to start Routine "end_practice_blocks" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from end_practice_code
        # Assess if acc and latency mastery criteria were met
        if (prac_block_A_percentage_accuracy >= accuracyCriterion) and (prac_block_B_percentage_accuracy >= accuracyCriterion) and (prac_block_A_median_latency <= latencyCriterion) and (prac_block_B_median_latency <= latencyCriterion):
            complete_test_blocks = n_pairs_test_blocks # latter from blocks.xlsx
            practice_blocks.finished = True
        # keep track of which components have finished
        end_practice_blocksComponents = []
        for thisComponent in end_practice_blocksComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "end_practice_blocks" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in end_practice_blocksComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "end_practice_blocks" ---
        for thisComponent in end_practice_blocksComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "end_practice_blocks" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
    # completed max_pairs_practice_blocks repeats of 'practice_blocks'
    
    
    # set up handler to look after randomisation of conditions etc
    test_blocks = data.TrialHandler(nReps=complete_test_blocks, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='test_blocks')
    thisExp.addLoop(test_blocks)  # add the loop to the experiment
    thisTest_block = test_blocks.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTest_block.rgb)
    if thisTest_block != None:
        for paramName in thisTest_block:
            exec('{} = thisTest_block[paramName]'.format(paramName))
    
    for thisTest_block in test_blocks:
        currentLoop = test_blocks
        # abbreviate parameter names if possible (e.g. rgb = thisTest_block.rgb)
        if thisTest_block != None:
            for paramName in thisTest_block:
                exec('{} = thisTest_block[paramName]'.format(paramName))
        
        # set up handler to look after randomisation of conditions etc
        Afirst = data.TrialHandler(nReps=Afirst_nReps, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=[None],
            seed=None, name='Afirst')
        thisExp.addLoop(Afirst)  # add the loop to the experiment
        thisAfirst = Afirst.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisAfirst.rgb)
        if thisAfirst != None:
            for paramName in thisAfirst:
                exec('{} = thisAfirst[paramName]'.format(paramName))
        
        for thisAfirst in Afirst:
            currentLoop = Afirst
            # abbreviate parameter names if possible (e.g. rgb = thisAfirst.rgb)
            if thisAfirst != None:
                for paramName in thisAfirst:
                    exec('{} = thisAfirst[paramName]'.format(paramName))
            
            # --- Prepare to start Routine "preblock_A" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            # Run 'Begin Routine' code from preblock_A_code
            # Option to simulates using ResponseEmulator:
            if Monkey:
                simulated_responses = [(1.1, 'e'), (1.1, 'i')]  # simulated responses take the form (onsetTime, responseKey). You can simulate more than one.
                responder = ResponseEmulator(simulated_responses)
                responder.start()
            
            # Generate list of stimuli for the block
            stim1_catA_stimuli_many = generate_trials('labelA_stimuli', 2, True)  # function and variable determined at begin exp.
            stim1_catB_stimuli_many = generate_trials('labelB_stimuli', 2, True)
            stim2_catA_stimuli_many = generate_trials('targetA_stimuli', 2, True)
            stim2_catB_stimuli_many = generate_trials('targetB_stimuli', 2, True)
            img_stim1_catA_stimuli_many = generate_trials('labelA_image_stimuli', 2, True)
            img_stim1_catB_stimuli_many = generate_trials('labelB_image_stimuli', 2, True)
            img_stim2_catA_stimuli_many = generate_trials('targetA_image_stimuli', 2, True)
            img_stim2_catB_stimuli_many = generate_trials('targetB_image_stimuli', 2, True)
            
            rule_box_A.setText(rule_A)
            preblock_response_A.keys = []
            preblock_response_A.rt = []
            _preblock_response_A_allKeys = []
            # keep track of which components have finished
            preblock_AComponents = [rule_box_A, preblock_response_A]
            for thisComponent in preblock_AComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "preblock_A" ---
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *rule_box_A* updates
                if rule_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    rule_box_A.frameNStart = frameN  # exact frame index
                    rule_box_A.tStart = t  # local t and not account for scr refresh
                    rule_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(rule_box_A, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'rule_box_A.started')
                    rule_box_A.setAutoDraw(True)
                
                # *preblock_response_A* updates
                waitOnFlip = False
                if preblock_response_A.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
                    # keep track of start time/frame for later
                    preblock_response_A.frameNStart = frameN  # exact frame index
                    preblock_response_A.tStart = t  # local t and not account for scr refresh
                    preblock_response_A.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(preblock_response_A, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'preblock_response_A.started')
                    preblock_response_A.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(preblock_response_A.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(preblock_response_A.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if preblock_response_A.status == STARTED and not waitOnFlip:
                    theseKeys = preblock_response_A.getKeys(keyList=['e', 'i'], waitRelease=False)
                    _preblock_response_A_allKeys.extend(theseKeys)
                    if len(_preblock_response_A_allKeys):
                        preblock_response_A.keys = _preblock_response_A_allKeys[-1].name  # just the last key pressed
                        preblock_response_A.rt = _preblock_response_A_allKeys[-1].rt
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in preblock_AComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "preblock_A" ---
            for thisComponent in preblock_AComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "preblock_A" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # set up handler to look after randomisation of conditions etc
            trials_Afirst = data.TrialHandler(nReps=reptitions, method='random', 
                extraInfo=expInfo, originPath=-1,
                trialList=data.importConditions('block_layout.xlsx'),
                seed=None, name='trials_Afirst')
            thisExp.addLoop(trials_Afirst)  # add the loop to the experiment
            thisTrials_Afirst = trials_Afirst.trialList[0]  # so we can initialise stimuli with some values
            # abbreviate parameter names if possible (e.g. rgb = thisTrials_Afirst.rgb)
            if thisTrials_Afirst != None:
                for paramName in thisTrials_Afirst:
                    exec('{} = thisTrials_Afirst[paramName]'.format(paramName))
            
            for thisTrials_Afirst in trials_Afirst:
                currentLoop = trials_Afirst
                # abbreviate parameter names if possible (e.g. rgb = thisTrials_Afirst.rgb)
                if thisTrials_Afirst != None:
                    for paramName in thisTrials_Afirst:
                        exec('{} = thisTrials_Afirst[paramName]'.format(paramName))
                
                # --- Prepare to start Routine "trial_A" ---
                continueRoutine = True
                routineForceEnded = False
                # update component parameters for each repeat
                # Run 'Begin Routine' code from trial_code_A
                # Option to simulates using ResponseEmulator:
                if Monkey:
                    simulated_responses = [(0.5, 'e'), (0.5, 'i')]  # simulated responses take the form (onsetTime, responseKey). You can simulate more than one.
                    responder = ResponseEmulator(simulated_responses)
                    responder.start()
                
                # For each stimlulus, choose a random exemplar from the appropriate list
                # word stimulus 1
                if stimulus1_category == 'a':
                    stimulus1 = stim1_catA_stimuli_many.pop()
                elif stimulus1_category == 'b':
                    stimulus1 = stim1_catB_stimuli_many.pop()
                
                # word stimulus 2
                if stimulus2_category == 'c':
                    stimulus2 = stim2_catA_stimuli_many.pop()
                elif stimulus2_category == 'd':
                    stimulus2 = stim2_catB_stimuli_many.pop()
                
                # image stimulus 1
                if stimulus1_category == 'a':
                    img_stimulus1 = img_stim1_catA_stimuli_many.pop()
                elif stimulus1_category == 'b':
                    img_stimulus1 = img_stim1_catB_stimuli_many.pop()
                
                # image stimulus 2
                if stimulus2_category == 'c':
                    img_stimulus2 = img_stim2_catA_stimuli_many.pop()
                elif stimulus2_category == 'd':
                    img_stimulus2 = img_stim2_catB_stimuli_many.pop()
                
                # set correct and incorrect responses
                if moving_response_options == False:
                    response_option_left = response_option_B  # i.e., the focal trial type is the right hand one, for hand dominance
                    response_option_right = response_option_A
                    response_option_onset = 0  # response options are onscreen constantly
                    if (trialType == 1) or (trialType == 4):
                        required_allowed = 'i'
                        required_correct = 'i'
                        feedback_allowed = 'e'
                        feedback_correct = 'e'
                    elif (trialType == 2) or (trialType == 3):
                        required_allowed = 'e'
                        required_correct = 'e'
                        feedback_allowed = 'i'
                        feedback_correct = 'i'
                elif moving_response_options == True:
                    rand_positions = randint(1, 3)
                    response_option_onset = 0.4  # response options appear with stimuli
                    if rand_positions == 1:
                        response_option_left = response_option_B
                        response_option_right = response_option_A
                        if (trialType == 1) or (trialType == 4):
                            required_allowed = 'i'
                            required_correct = 'i'
                            feedback_allowed = 'e'
                            feedback_correct = 'e'
                        elif (trialType == 2) or (trialType == 3):
                            required_allowed = 'e'
                            required_correct = 'e'
                            feedback_allowed = 'i'
                            feedback_correct = 'i'
                    elif rand_positions == 2:
                        response_option_left = response_option_A
                        response_option_right = response_option_B
                        if (trialType == 1) or (trialType == 4):
                            required_allowed = 'e'
                            required_correct = 'e'
                            feedback_allowed = 'i'
                            feedback_correct = 'i'
                        elif (trialType == 2) or (trialType == 3):
                            required_allowed = 'i'
                            required_correct = 'i'
                            feedback_allowed = 'e'
                            feedback_correct = 'e'
                image_stimulus1_box_A.setPos(image_stimulus1_location)
                image_stimulus1_box_A.setImage(img_stimulus1)
                image_stimulus2_box_A.setPos(image_stimulus2_location)
                image_stimulus2_box_A.setImage(img_stimulus2)
                stimulus1_box_A.setPos(stimulus1_location)
                stimulus1_box_A.setText(stimulus1)
                stimulus2_box_A.setPos(stimulus2_location)
                stimulus2_box_A.setText(stimulus2)
                required_response_A.keys = []
                required_response_A.rt = []
                _required_response_A_allKeys = []
                feedback_response_A.keys = []
                feedback_response_A.rt = []
                _feedback_response_A_allKeys = []
                left_box_A.setPos(response_option_left_location)
                left_box_A.setText(response_option_left)
                right_box_A.setPos(response_option_right_location)
                right_box_A.setText(response_option_right)
                accuracy_feedback_box_A.setPos(accuracy_feedback_location)
                # keep track of which components have finished
                trial_AComponents = [image_stimulus1_box_A, image_stimulus2_box_A, stimulus1_box_A, stimulus2_box_A, required_response_A, feedback_response_A, left_box_A, right_box_A, accuracy_feedback_box_A]
                for thisComponent in trial_AComponents:
                    thisComponent.tStart = None
                    thisComponent.tStop = None
                    thisComponent.tStartRefresh = None
                    thisComponent.tStopRefresh = None
                    if hasattr(thisComponent, 'status'):
                        thisComponent.status = NOT_STARTED
                # reset timers
                t = 0
                _timeToFirstFrame = win.getFutureFlipTime(clock="now")
                frameN = -1
                
                # --- Run Routine "trial_A" ---
                while continueRoutine:
                    # get current time
                    t = routineTimer.getTime()
                    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                    # update/draw components on each frame
                    # Run 'Each Frame' code from trial_code_A
                    # Accuracy feedback message
                    if len(feedback_response_A.keys)<1:
                        accuracyFeedback=""
                    else:
                        accuracyFeedback="X"
                    
                    # *image_stimulus1_box_A* updates
                    if image_stimulus1_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                        # keep track of start time/frame for later
                        image_stimulus1_box_A.frameNStart = frameN  # exact frame index
                        image_stimulus1_box_A.tStart = t  # local t and not account for scr refresh
                        image_stimulus1_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(image_stimulus1_box_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_stimulus1_box_A.started')
                        image_stimulus1_box_A.setAutoDraw(True)
                    
                    # *image_stimulus2_box_A* updates
                    if image_stimulus2_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                        # keep track of start time/frame for later
                        image_stimulus2_box_A.frameNStart = frameN  # exact frame index
                        image_stimulus2_box_A.tStart = t  # local t and not account for scr refresh
                        image_stimulus2_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(image_stimulus2_box_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_stimulus2_box_A.started')
                        image_stimulus2_box_A.setAutoDraw(True)
                    
                    # *stimulus1_box_A* updates
                    if stimulus1_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                        # keep track of start time/frame for later
                        stimulus1_box_A.frameNStart = frameN  # exact frame index
                        stimulus1_box_A.tStart = t  # local t and not account for scr refresh
                        stimulus1_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(stimulus1_box_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'stimulus1_box_A.started')
                        stimulus1_box_A.setAutoDraw(True)
                    
                    # *stimulus2_box_A* updates
                    if stimulus2_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                        # keep track of start time/frame for later
                        stimulus2_box_A.frameNStart = frameN  # exact frame index
                        stimulus2_box_A.tStart = t  # local t and not account for scr refresh
                        stimulus2_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(stimulus2_box_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'stimulus2_box_A.started')
                        stimulus2_box_A.setAutoDraw(True)
                    
                    # *required_response_A* updates
                    waitOnFlip = False
                    if required_response_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                        # keep track of start time/frame for later
                        required_response_A.frameNStart = frameN  # exact frame index
                        required_response_A.tStart = t  # local t and not account for scr refresh
                        required_response_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(required_response_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'required_response_A.started')
                        required_response_A.status = STARTED
                        # AllowedKeys looks like a variable named `required_allowed`
                        if not type(required_allowed) in [list, tuple, np.ndarray]:
                            if not isinstance(required_allowed, str):
                                logging.error('AllowedKeys variable `required_allowed` is not string- or list-like.')
                                core.quit()
                            elif not ',' in required_allowed:
                                required_allowed = (required_allowed,)
                            else:
                                required_allowed = eval(required_allowed)
                        # keyboard checking is just starting
                        waitOnFlip = True
                        win.callOnFlip(required_response_A.clock.reset)  # t=0 on next screen flip
                        win.callOnFlip(required_response_A.clearEvents, eventType='keyboard')  # clear events on next screen flip
                    if required_response_A.status == STARTED and not waitOnFlip:
                        theseKeys = required_response_A.getKeys(keyList=list(required_allowed), waitRelease=False)
                        _required_response_A_allKeys.extend(theseKeys)
                        if len(_required_response_A_allKeys):
                            required_response_A.keys = _required_response_A_allKeys[0].name  # just the first key pressed
                            required_response_A.rt = _required_response_A_allKeys[0].rt
                            # was this correct?
                            if (required_response_A.keys == str(required_correct)) or (required_response_A.keys == required_correct):
                                required_response_A.corr = 1
                            else:
                                required_response_A.corr = 0
                            # a response ends the routine
                            continueRoutine = False
                    
                    # *feedback_response_A* updates
                    waitOnFlip = False
                    if feedback_response_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                        # keep track of start time/frame for later
                        feedback_response_A.frameNStart = frameN  # exact frame index
                        feedback_response_A.tStart = t  # local t and not account for scr refresh
                        feedback_response_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(feedback_response_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'feedback_response_A.started')
                        feedback_response_A.status = STARTED
                        # AllowedKeys looks like a variable named `feedback_allowed`
                        if not type(feedback_allowed) in [list, tuple, np.ndarray]:
                            if not isinstance(feedback_allowed, str):
                                logging.error('AllowedKeys variable `feedback_allowed` is not string- or list-like.')
                                core.quit()
                            elif not ',' in feedback_allowed:
                                feedback_allowed = (feedback_allowed,)
                            else:
                                feedback_allowed = eval(feedback_allowed)
                        # keyboard checking is just starting
                        waitOnFlip = True
                        win.callOnFlip(feedback_response_A.clock.reset)  # t=0 on next screen flip
                        win.callOnFlip(feedback_response_A.clearEvents, eventType='keyboard')  # clear events on next screen flip
                    if feedback_response_A.status == STARTED and not waitOnFlip:
                        theseKeys = feedback_response_A.getKeys(keyList=list(feedback_allowed), waitRelease=False)
                        _feedback_response_A_allKeys.extend(theseKeys)
                        if len(_feedback_response_A_allKeys):
                            feedback_response_A.keys = _feedback_response_A_allKeys[0].name  # just the first key pressed
                            feedback_response_A.rt = _feedback_response_A_allKeys[0].rt
                            # was this correct?
                            if (feedback_response_A.keys == str(feedback_correct)) or (feedback_response_A.keys == feedback_correct):
                                feedback_response_A.corr = 1
                            else:
                                feedback_response_A.corr = 0
                    
                    # *left_box_A* updates
                    if left_box_A.status == NOT_STARTED and tThisFlip >= response_option_onset-frameTolerance:
                        # keep track of start time/frame for later
                        left_box_A.frameNStart = frameN  # exact frame index
                        left_box_A.tStart = t  # local t and not account for scr refresh
                        left_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(left_box_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'left_box_A.started')
                        left_box_A.setAutoDraw(True)
                    
                    # *right_box_A* updates
                    if right_box_A.status == NOT_STARTED and tThisFlip >= response_option_onset-frameTolerance:
                        # keep track of start time/frame for later
                        right_box_A.frameNStart = frameN  # exact frame index
                        right_box_A.tStart = t  # local t and not account for scr refresh
                        right_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(right_box_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'right_box_A.started')
                        right_box_A.setAutoDraw(True)
                    
                    # *accuracy_feedback_box_A* updates
                    if accuracy_feedback_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                        # keep track of start time/frame for later
                        accuracy_feedback_box_A.frameNStart = frameN  # exact frame index
                        accuracy_feedback_box_A.tStart = t  # local t and not account for scr refresh
                        accuracy_feedback_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(accuracy_feedback_box_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'accuracy_feedback_box_A.started')
                        accuracy_feedback_box_A.setAutoDraw(True)
                    if accuracy_feedback_box_A.status == STARTED:  # only update if drawing
                        accuracy_feedback_box_A.setText(accuracyFeedback, log=False)
                    
                    # check for quit (typically the Esc key)
                    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                        core.quit()
                    
                    # check if all components have finished
                    if not continueRoutine:  # a component has requested a forced-end of Routine
                        routineForceEnded = True
                        break
                    continueRoutine = False  # will revert to True if at least one component still running
                    for thisComponent in trial_AComponents:
                        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                            continueRoutine = True
                            break  # at least one component has not yet finished
                    
                    # refresh the screen
                    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                        win.flip()
                
                # --- Ending Routine "trial_A" ---
                for thisComponent in trial_AComponents:
                    if hasattr(thisComponent, "setAutoDraw"):
                        thisComponent.setAutoDraw(False)
                # Run 'End Routine' code from trial_code_A
                # save exemplars to experiment handler so they're written to the csv file
                thisExp.addData('stimulus1', stimulus1)
                thisExp.addData('stimulus2', stimulus2)
                thisExp.addData('img_stimulus1', img_stimulus1)
                thisExp.addData('img_stimulus2', img_stimulus2)
                thisExp.addData('response_option_left', response_option_left)
                thisExp.addData('response_option_right', response_option_right)
                # check responses
                if required_response_A.keys in ['', [], None]:  # No response was made
                    required_response_A.keys = None
                    # was no response the correct answer?!
                    if str(required_correct).lower() == 'none':
                       required_response_A.corr = 1;  # correct non-response
                    else:
                       required_response_A.corr = 0;  # failed to respond (incorrectly)
                # store data for trials_Afirst (TrialHandler)
                trials_Afirst.addData('required_response_A.keys',required_response_A.keys)
                trials_Afirst.addData('required_response_A.corr', required_response_A.corr)
                if required_response_A.keys != None:  # we had a response
                    trials_Afirst.addData('required_response_A.rt', required_response_A.rt)
                # check responses
                if feedback_response_A.keys in ['', [], None]:  # No response was made
                    feedback_response_A.keys = None
                    # was no response the correct answer?!
                    if str(feedback_correct).lower() == 'none':
                       feedback_response_A.corr = 1;  # correct non-response
                    else:
                       feedback_response_A.corr = 0;  # failed to respond (incorrectly)
                # store data for trials_Afirst (TrialHandler)
                trials_Afirst.addData('feedback_response_A.keys',feedback_response_A.keys)
                trials_Afirst.addData('feedback_response_A.corr', feedback_response_A.corr)
                if feedback_response_A.keys != None:  # we had a response
                    trials_Afirst.addData('feedback_response_A.rt', feedback_response_A.rt)
                # the Routine "trial_A" was not non-slip safe, so reset the non-slip timer
                routineTimer.reset()
                thisExp.nextEntry()
                
            # completed reptitions repeats of 'trials_Afirst'
            
            
            # --- Prepare to start Routine "postblock_A" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            # Run 'Begin Routine' code from postblock_code_A
            # Option to simulates using ResponseEmulator:
            if Monkey:
                simulated_responses = [(1.1, 'e'), (1.1, 'i')]  # simulated responses take the form (onsetTime, responseKey). You can simulate more than one.
                responder = ResponseEmulator(simulated_responses)
                responder.start()
            
            # calculate summary stats
            if(starting_block == 'a'): 
                block_A_percentage_accuracy = (float(trials_Afirst.data['required_response_A.corr'].count()) - float(trials_Afirst.data['feedback_response_A.corr'].sum())) /  float(trials_Afirst.data['required_response_A.corr'].count()) * 100 
                block_A_median_latency = np.median(trials_Afirst.data['required_response_A.rt'])
            
            if(starting_block == 'b'): 
                block_A_percentage_accuracy = (float(trials_Asecond.data['required_response_A.corr'].count()) - float(trials_Asecond.data['feedback_response_A.corr'].sum())) /  float(trials_Asecond.data['required_response_A.corr'].count()) * 100 
                block_A_median_latency = np.median(trials_Asecond.data['required_response_A.rt'])
            
            # set messages
            msg_accuracy = "%s %i %s" %(accuracy, block_A_percentage_accuracy, percentCorrect) 
            msg_latency = "%s %.2f %s" %(speed, block_A_median_latency, seconds)
            
            ### save summary stats to experiment handler so they're written to the csv file
            ##thisExp.addData('block_A_percentage_accuracy', block_A_percentage_accuracy)
            ##thisExp.addData('block_A_median_latency', block_A_median_latency)
            aim_box_A.setText(aim)
            accuracy_box_A.setText(msg_accuracy)
            latency_box_A.setText(msg_latency)
            press_box_A.setText(press_message)
            postblock_response_A.keys = []
            postblock_response_A.rt = []
            _postblock_response_A_allKeys = []
            # keep track of which components have finished
            postblock_AComponents = [aim_box_A, accuracy_box_A, latency_box_A, press_box_A, postblock_response_A]
            for thisComponent in postblock_AComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "postblock_A" ---
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *aim_box_A* updates
                if aim_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    aim_box_A.frameNStart = frameN  # exact frame index
                    aim_box_A.tStart = t  # local t and not account for scr refresh
                    aim_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(aim_box_A, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'aim_box_A.started')
                    aim_box_A.setAutoDraw(True)
                
                # *accuracy_box_A* updates
                if accuracy_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    accuracy_box_A.frameNStart = frameN  # exact frame index
                    accuracy_box_A.tStart = t  # local t and not account for scr refresh
                    accuracy_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(accuracy_box_A, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'accuracy_box_A.started')
                    accuracy_box_A.setAutoDraw(True)
                
                # *latency_box_A* updates
                if latency_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    latency_box_A.frameNStart = frameN  # exact frame index
                    latency_box_A.tStart = t  # local t and not account for scr refresh
                    latency_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(latency_box_A, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'latency_box_A.started')
                    latency_box_A.setAutoDraw(True)
                
                # *press_box_A* updates
                if press_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    press_box_A.frameNStart = frameN  # exact frame index
                    press_box_A.tStart = t  # local t and not account for scr refresh
                    press_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(press_box_A, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'press_box_A.started')
                    press_box_A.setAutoDraw(True)
                
                # *postblock_response_A* updates
                waitOnFlip = False
                if postblock_response_A.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
                    # keep track of start time/frame for later
                    postblock_response_A.frameNStart = frameN  # exact frame index
                    postblock_response_A.tStart = t  # local t and not account for scr refresh
                    postblock_response_A.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(postblock_response_A, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'postblock_response_A.started')
                    postblock_response_A.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(postblock_response_A.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(postblock_response_A.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if postblock_response_A.status == STARTED and not waitOnFlip:
                    theseKeys = postblock_response_A.getKeys(keyList=['e', 'i'], waitRelease=False)
                    _postblock_response_A_allKeys.extend(theseKeys)
                    if len(_postblock_response_A_allKeys):
                        postblock_response_A.keys = _postblock_response_A_allKeys[-1].name  # just the last key pressed
                        postblock_response_A.rt = _postblock_response_A_allKeys[-1].rt
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in postblock_AComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "postblock_A" ---
            for thisComponent in postblock_AComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "postblock_A" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
        # completed Afirst_nReps repeats of 'Afirst'
        
        
        # --- Prepare to start Routine "preblock_B" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from preblock_B_code
        # Option to simulates using ResponseEmulator:
        if Monkey:
            simulated_responses = [(1.1, 'e'), (1.1, 'i')]  # simulated responses take the form (onsetTime, responseKey). You can simulate more than one.
            responder = ResponseEmulator(simulated_responses)
            responder.start()
        
        # Generate list of stimuli for the block
        stim1_catA_stimuli_many = generate_trials('labelA_stimuli', 2, True)  # function and variable determined at begin exp.
        stim1_catB_stimuli_many = generate_trials('labelB_stimuli', 2, True)
        stim2_catA_stimuli_many = generate_trials('targetA_stimuli', 2, True)
        stim2_catB_stimuli_many = generate_trials('targetB_stimuli', 2, True)
        img_stim1_catA_stimuli_many = generate_trials('labelA_image_stimuli', 2, True)
        img_stim1_catB_stimuli_many = generate_trials('labelB_image_stimuli', 2, True)
        img_stim2_catA_stimuli_many = generate_trials('targetA_image_stimuli', 2, True)
        img_stim2_catB_stimuli_many = generate_trials('targetB_image_stimuli', 2, True)
        rule_box_B.setText(rule_B)
        preblock_response_B.keys = []
        preblock_response_B.rt = []
        _preblock_response_B_allKeys = []
        # keep track of which components have finished
        preblock_BComponents = [rule_box_B, preblock_response_B]
        for thisComponent in preblock_BComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "preblock_B" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *rule_box_B* updates
            if rule_box_B.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                # keep track of start time/frame for later
                rule_box_B.frameNStart = frameN  # exact frame index
                rule_box_B.tStart = t  # local t and not account for scr refresh
                rule_box_B.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(rule_box_B, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'rule_box_B.started')
                rule_box_B.setAutoDraw(True)
            
            # *preblock_response_B* updates
            waitOnFlip = False
            if preblock_response_B.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
                # keep track of start time/frame for later
                preblock_response_B.frameNStart = frameN  # exact frame index
                preblock_response_B.tStart = t  # local t and not account for scr refresh
                preblock_response_B.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(preblock_response_B, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'preblock_response_B.started')
                preblock_response_B.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(preblock_response_B.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(preblock_response_B.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if preblock_response_B.status == STARTED and not waitOnFlip:
                theseKeys = preblock_response_B.getKeys(keyList=['e', 'i'], waitRelease=False)
                _preblock_response_B_allKeys.extend(theseKeys)
                if len(_preblock_response_B_allKeys):
                    preblock_response_B.keys = _preblock_response_B_allKeys[-1].name  # just the last key pressed
                    preblock_response_B.rt = _preblock_response_B_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in preblock_BComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "preblock_B" ---
        for thisComponent in preblock_BComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "preblock_B" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        trials_B = data.TrialHandler(nReps=reptitions, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions('block_layout.xlsx'),
            seed=None, name='trials_B')
        thisExp.addLoop(trials_B)  # add the loop to the experiment
        thisTrials_B = trials_B.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisTrials_B.rgb)
        if thisTrials_B != None:
            for paramName in thisTrials_B:
                exec('{} = thisTrials_B[paramName]'.format(paramName))
        
        for thisTrials_B in trials_B:
            currentLoop = trials_B
            # abbreviate parameter names if possible (e.g. rgb = thisTrials_B.rgb)
            if thisTrials_B != None:
                for paramName in thisTrials_B:
                    exec('{} = thisTrials_B[paramName]'.format(paramName))
            
            # --- Prepare to start Routine "trial_B" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            # Run 'Begin Routine' code from trial_code_B
            # Option to simulates using ResponseEmulator:
            if Monkey:
                simulated_responses = [(0.5, 'e'), (0.5, 'i')]  # simulated responses take the form (onsetTime, responseKey). You can simulate more than one.
                responder = ResponseEmulator(simulated_responses)
                responder.start()
            
            # For each stimlulus, choose a random exemplar from the appropriate list
            # word stimulus 1
            if stimulus1_category == 'a':
                stimulus1 = stim1_catA_stimuli_many.pop()
            elif stimulus1_category == 'b':
                stimulus1 = stim1_catB_stimuli_many.pop()
            
            # word stimulus 2
            if stimulus2_category == 'c':
                stimulus2 = stim2_catA_stimuli_many.pop()
            elif stimulus2_category == 'd':
                stimulus2 = stim2_catB_stimuli_many.pop()
            
            # image stimulus 1
            if stimulus1_category == 'a':
                img_stimulus1 = img_stim1_catA_stimuli_many.pop()
            elif stimulus1_category == 'b':
                img_stimulus1 = img_stim1_catB_stimuli_many.pop()
            
            # image stimulus 2
            if stimulus2_category == 'c':
                img_stimulus2 = img_stim2_catA_stimuli_many.pop()
            elif stimulus2_category == 'd':
                img_stimulus2 = img_stim2_catB_stimuli_many.pop()
            
            # set correct and incorrect responses
            if moving_response_options == False:
                response_option_left = response_option_B  # i.e., the focal trial type is the right hand one, for hand dominance
                response_option_right = response_option_A
                response_option_onset = 0  # response options are onscreen constantly
                if (trialType == 1) or (trialType == 4):
                    required_allowed = 'e'  # PATTERN REVERED FROM BLOCK A
                    required_correct = 'e'
                    feedback_allowed = 'i'
                    feedback_correct = 'i'
                elif (trialType == 2) or (trialType == 3):
                    required_allowed = 'i'  # PATTERN REVERED FROM BLOCK A
                    required_correct = 'i'
                    feedback_allowed = 'e'
                    feedback_correct = 'e'
            elif moving_response_options == True:
                rand_positions = randint(1, 3)
                response_option_onset = 0.4  # response options appear with stimuli
                if rand_positions == 1:
                    response_option_left = response_option_B
                    response_option_right = response_option_A
                    if (trialType == 1) or (trialType == 4):
                        required_allowed = 'e'  # PATTERN REVERED FROM BLOCK A
                        required_correct = 'e'
                        feedback_allowed = 'i'
                        feedback_correct = 'i'
                    elif (trialType == 2) or (trialType == 3):
                        required_allowed = 'i'  # PATTERN REVERED FROM BLOCK A
                        required_correct = 'i'
                        feedback_allowed = 'e'
                        feedback_correct = 'e'
                elif rand_positions == 2:
                    response_option_left = response_option_A
                    response_option_right = response_option_B
                    if (trialType == 1) or (trialType == 4):
                        required_allowed = 'i'  # PATTERN REVERED FROM BLOCK A
                        required_correct = 'i'
                        feedback_allowed = 'e'
                        feedback_correct = 'e'
                    elif (trialType == 2) or (trialType == 3):
                        required_allowed = 'e'  # PATTERN REVERED FROM BLOCK A
                        required_correct = 'e'
                        feedback_allowed = 'i'
                        feedback_correct = 'i'
            image_stimulus1_box_B.setPos(image_stimulus1_location)
            image_stimulus1_box_B.setImage(img_stimulus1)
            image_stimulus2_box_B.setPos(image_stimulus2_location)
            image_stimulus2_box_B.setImage(img_stimulus2)
            stimulus1_box_B.setPos(stimulus1_location)
            stimulus1_box_B.setText(stimulus1)
            stimulus2_box_B.setPos(stimulus2_location)
            stimulus2_box_B.setText(stimulus2)
            required_response_B.keys = []
            required_response_B.rt = []
            _required_response_B_allKeys = []
            feedback_response_B.keys = []
            feedback_response_B.rt = []
            _feedback_response_B_allKeys = []
            left_box_B.setPos(response_option_left_location)
            left_box_B.setText(response_option_left)
            right_box_B.setPos(response_option_right_location)
            right_box_B.setText(response_option_right)
            accuracy_feedback_box_B.setPos(accuracy_feedback_location)
            # keep track of which components have finished
            trial_BComponents = [image_stimulus1_box_B, image_stimulus2_box_B, stimulus1_box_B, stimulus2_box_B, required_response_B, feedback_response_B, left_box_B, right_box_B, accuracy_feedback_box_B]
            for thisComponent in trial_BComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "trial_B" ---
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                # Run 'Each Frame' code from trial_code_B
                # Accuracy feedback message
                if len(feedback_response_B.keys)<1:
                    accuracyFeedback=""
                else:
                    accuracyFeedback="X"
                
                # *image_stimulus1_box_B* updates
                if image_stimulus1_box_B.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    image_stimulus1_box_B.frameNStart = frameN  # exact frame index
                    image_stimulus1_box_B.tStart = t  # local t and not account for scr refresh
                    image_stimulus1_box_B.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_stimulus1_box_B, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_stimulus1_box_B.started')
                    image_stimulus1_box_B.setAutoDraw(True)
                
                # *image_stimulus2_box_B* updates
                if image_stimulus2_box_B.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    image_stimulus2_box_B.frameNStart = frameN  # exact frame index
                    image_stimulus2_box_B.tStart = t  # local t and not account for scr refresh
                    image_stimulus2_box_B.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_stimulus2_box_B, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_stimulus2_box_B.started')
                    image_stimulus2_box_B.setAutoDraw(True)
                
                # *stimulus1_box_B* updates
                if stimulus1_box_B.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    stimulus1_box_B.frameNStart = frameN  # exact frame index
                    stimulus1_box_B.tStart = t  # local t and not account for scr refresh
                    stimulus1_box_B.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(stimulus1_box_B, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'stimulus1_box_B.started')
                    stimulus1_box_B.setAutoDraw(True)
                
                # *stimulus2_box_B* updates
                if stimulus2_box_B.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    stimulus2_box_B.frameNStart = frameN  # exact frame index
                    stimulus2_box_B.tStart = t  # local t and not account for scr refresh
                    stimulus2_box_B.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(stimulus2_box_B, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'stimulus2_box_B.started')
                    stimulus2_box_B.setAutoDraw(True)
                
                # *required_response_B* updates
                waitOnFlip = False
                if required_response_B.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    required_response_B.frameNStart = frameN  # exact frame index
                    required_response_B.tStart = t  # local t and not account for scr refresh
                    required_response_B.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(required_response_B, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'required_response_B.started')
                    required_response_B.status = STARTED
                    # AllowedKeys looks like a variable named `required_allowed`
                    if not type(required_allowed) in [list, tuple, np.ndarray]:
                        if not isinstance(required_allowed, str):
                            logging.error('AllowedKeys variable `required_allowed` is not string- or list-like.')
                            core.quit()
                        elif not ',' in required_allowed:
                            required_allowed = (required_allowed,)
                        else:
                            required_allowed = eval(required_allowed)
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(required_response_B.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(required_response_B.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if required_response_B.status == STARTED and not waitOnFlip:
                    theseKeys = required_response_B.getKeys(keyList=list(required_allowed), waitRelease=False)
                    _required_response_B_allKeys.extend(theseKeys)
                    if len(_required_response_B_allKeys):
                        required_response_B.keys = _required_response_B_allKeys[0].name  # just the first key pressed
                        required_response_B.rt = _required_response_B_allKeys[0].rt
                        # was this correct?
                        if (required_response_B.keys == str(required_correct)) or (required_response_B.keys == required_correct):
                            required_response_B.corr = 1
                        else:
                            required_response_B.corr = 0
                        # a response ends the routine
                        continueRoutine = False
                
                # *feedback_response_B* updates
                waitOnFlip = False
                if feedback_response_B.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    feedback_response_B.frameNStart = frameN  # exact frame index
                    feedback_response_B.tStart = t  # local t and not account for scr refresh
                    feedback_response_B.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(feedback_response_B, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'feedback_response_B.started')
                    feedback_response_B.status = STARTED
                    # AllowedKeys looks like a variable named `feedback_allowed`
                    if not type(feedback_allowed) in [list, tuple, np.ndarray]:
                        if not isinstance(feedback_allowed, str):
                            logging.error('AllowedKeys variable `feedback_allowed` is not string- or list-like.')
                            core.quit()
                        elif not ',' in feedback_allowed:
                            feedback_allowed = (feedback_allowed,)
                        else:
                            feedback_allowed = eval(feedback_allowed)
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(feedback_response_B.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(feedback_response_B.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if feedback_response_B.status == STARTED and not waitOnFlip:
                    theseKeys = feedback_response_B.getKeys(keyList=list(feedback_allowed), waitRelease=False)
                    _feedback_response_B_allKeys.extend(theseKeys)
                    if len(_feedback_response_B_allKeys):
                        feedback_response_B.keys = _feedback_response_B_allKeys[0].name  # just the first key pressed
                        feedback_response_B.rt = _feedback_response_B_allKeys[0].rt
                        # was this correct?
                        if (feedback_response_B.keys == str(feedback_correct)) or (feedback_response_B.keys == feedback_correct):
                            feedback_response_B.corr = 1
                        else:
                            feedback_response_B.corr = 0
                
                # *left_box_B* updates
                if left_box_B.status == NOT_STARTED and tThisFlip >= response_option_onset-frameTolerance:
                    # keep track of start time/frame for later
                    left_box_B.frameNStart = frameN  # exact frame index
                    left_box_B.tStart = t  # local t and not account for scr refresh
                    left_box_B.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(left_box_B, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'left_box_B.started')
                    left_box_B.setAutoDraw(True)
                
                # *right_box_B* updates
                if right_box_B.status == NOT_STARTED and tThisFlip >= response_option_onset-frameTolerance:
                    # keep track of start time/frame for later
                    right_box_B.frameNStart = frameN  # exact frame index
                    right_box_B.tStart = t  # local t and not account for scr refresh
                    right_box_B.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(right_box_B, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'right_box_B.started')
                    right_box_B.setAutoDraw(True)
                
                # *accuracy_feedback_box_B* updates
                if accuracy_feedback_box_B.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    accuracy_feedback_box_B.frameNStart = frameN  # exact frame index
                    accuracy_feedback_box_B.tStart = t  # local t and not account for scr refresh
                    accuracy_feedback_box_B.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(accuracy_feedback_box_B, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'accuracy_feedback_box_B.started')
                    accuracy_feedback_box_B.setAutoDraw(True)
                if accuracy_feedback_box_B.status == STARTED:  # only update if drawing
                    accuracy_feedback_box_B.setText(accuracyFeedback, log=False)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in trial_BComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "trial_B" ---
            for thisComponent in trial_BComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # Run 'End Routine' code from trial_code_B
            # save exemplars to experiment handler so they're written to the csv file
            thisExp.addData('stimulus1', stimulus1)
            thisExp.addData('stimulus2', stimulus2)
            thisExp.addData('img_stimulus1', img_stimulus1)
            thisExp.addData('img_stimulus2', img_stimulus2)
            thisExp.addData('response_option_left', response_option_left)
            thisExp.addData('response_option_right', response_option_right)
            # check responses
            if required_response_B.keys in ['', [], None]:  # No response was made
                required_response_B.keys = None
                # was no response the correct answer?!
                if str(required_correct).lower() == 'none':
                   required_response_B.corr = 1;  # correct non-response
                else:
                   required_response_B.corr = 0;  # failed to respond (incorrectly)
            # store data for trials_B (TrialHandler)
            trials_B.addData('required_response_B.keys',required_response_B.keys)
            trials_B.addData('required_response_B.corr', required_response_B.corr)
            if required_response_B.keys != None:  # we had a response
                trials_B.addData('required_response_B.rt', required_response_B.rt)
            # check responses
            if feedback_response_B.keys in ['', [], None]:  # No response was made
                feedback_response_B.keys = None
                # was no response the correct answer?!
                if str(feedback_correct).lower() == 'none':
                   feedback_response_B.corr = 1;  # correct non-response
                else:
                   feedback_response_B.corr = 0;  # failed to respond (incorrectly)
            # store data for trials_B (TrialHandler)
            trials_B.addData('feedback_response_B.keys',feedback_response_B.keys)
            trials_B.addData('feedback_response_B.corr', feedback_response_B.corr)
            if feedback_response_B.keys != None:  # we had a response
                trials_B.addData('feedback_response_B.rt', feedback_response_B.rt)
            # the Routine "trial_B" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
        # completed reptitions repeats of 'trials_B'
        
        
        # --- Prepare to start Routine "postblock_B" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from postblock_code_B
        # Option to simulates using ResponseEmulator:
        if Monkey:
            simulated_responses = [(1.1, 'e'), (1.1, 'i')]  # simulated responses take the form (onsetTime, responseKey). You can simulate more than one.
            responder = ResponseEmulator(simulated_responses)
            responder.start()
        
        # calculate summary stats
        block_B_percentage_accuracy = (float(trials_B.data['required_response_B.corr'].count()) - float(trials_B.data['feedback_response_B.corr'].sum())) /  float(trials_B.data['required_response_B.corr'].count()) * 100 
        block_B_median_latency = np.median(trials_B.data['required_response_B.rt'])
        
        # set messages
        msg_accuracy = "%s %i %s" %(accuracy, block_B_percentage_accuracy, percentCorrect) 
        msg_latency = "%s %.2f %s" %(speed, block_B_median_latency, seconds)
        
        ### save summary stats to experiment handler so they're written to the csv file
        ##thisExp.addData('block_B_percentage_accuracy', block_B_percentage_accuracy)
        ##thisExp.addData('block_B_median_latency', block_B_median_latency)
        aim_box_B.setText(aim)
        accuracy_box_B.setText(msg_accuracy)
        latency_box_B.setText(msg_latency)
        press_box_B.setText(press_message)
        postblock_response_B.keys = []
        postblock_response_B.rt = []
        _postblock_response_B_allKeys = []
        # keep track of which components have finished
        postblock_BComponents = [aim_box_B, accuracy_box_B, latency_box_B, press_box_B, postblock_response_B]
        for thisComponent in postblock_BComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "postblock_B" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *aim_box_B* updates
            if aim_box_B.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                # keep track of start time/frame for later
                aim_box_B.frameNStart = frameN  # exact frame index
                aim_box_B.tStart = t  # local t and not account for scr refresh
                aim_box_B.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(aim_box_B, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'aim_box_B.started')
                aim_box_B.setAutoDraw(True)
            
            # *accuracy_box_B* updates
            if accuracy_box_B.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                # keep track of start time/frame for later
                accuracy_box_B.frameNStart = frameN  # exact frame index
                accuracy_box_B.tStart = t  # local t and not account for scr refresh
                accuracy_box_B.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(accuracy_box_B, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'accuracy_box_B.started')
                accuracy_box_B.setAutoDraw(True)
            
            # *latency_box_B* updates
            if latency_box_B.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                # keep track of start time/frame for later
                latency_box_B.frameNStart = frameN  # exact frame index
                latency_box_B.tStart = t  # local t and not account for scr refresh
                latency_box_B.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(latency_box_B, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'latency_box_B.started')
                latency_box_B.setAutoDraw(True)
            
            # *press_box_B* updates
            if press_box_B.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                # keep track of start time/frame for later
                press_box_B.frameNStart = frameN  # exact frame index
                press_box_B.tStart = t  # local t and not account for scr refresh
                press_box_B.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(press_box_B, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'press_box_B.started')
                press_box_B.setAutoDraw(True)
            
            # *postblock_response_B* updates
            waitOnFlip = False
            if postblock_response_B.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
                # keep track of start time/frame for later
                postblock_response_B.frameNStart = frameN  # exact frame index
                postblock_response_B.tStart = t  # local t and not account for scr refresh
                postblock_response_B.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(postblock_response_B, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'postblock_response_B.started')
                postblock_response_B.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(postblock_response_B.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(postblock_response_B.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if postblock_response_B.status == STARTED and not waitOnFlip:
                theseKeys = postblock_response_B.getKeys(keyList=['e', 'i'], waitRelease=False)
                _postblock_response_B_allKeys.extend(theseKeys)
                if len(_postblock_response_B_allKeys):
                    postblock_response_B.keys = _postblock_response_B_allKeys[-1].name  # just the last key pressed
                    postblock_response_B.rt = _postblock_response_B_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in postblock_BComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "postblock_B" ---
        for thisComponent in postblock_BComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "postblock_B" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        Asecond = data.TrialHandler(nReps=Asecond_nReps, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=[None],
            seed=None, name='Asecond')
        thisExp.addLoop(Asecond)  # add the loop to the experiment
        thisAsecond = Asecond.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisAsecond.rgb)
        if thisAsecond != None:
            for paramName in thisAsecond:
                exec('{} = thisAsecond[paramName]'.format(paramName))
        
        for thisAsecond in Asecond:
            currentLoop = Asecond
            # abbreviate parameter names if possible (e.g. rgb = thisAsecond.rgb)
            if thisAsecond != None:
                for paramName in thisAsecond:
                    exec('{} = thisAsecond[paramName]'.format(paramName))
            
            # --- Prepare to start Routine "preblock_A" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            # Run 'Begin Routine' code from preblock_A_code
            # Option to simulates using ResponseEmulator:
            if Monkey:
                simulated_responses = [(1.1, 'e'), (1.1, 'i')]  # simulated responses take the form (onsetTime, responseKey). You can simulate more than one.
                responder = ResponseEmulator(simulated_responses)
                responder.start()
            
            # Generate list of stimuli for the block
            stim1_catA_stimuli_many = generate_trials('labelA_stimuli', 2, True)  # function and variable determined at begin exp.
            stim1_catB_stimuli_many = generate_trials('labelB_stimuli', 2, True)
            stim2_catA_stimuli_many = generate_trials('targetA_stimuli', 2, True)
            stim2_catB_stimuli_many = generate_trials('targetB_stimuli', 2, True)
            img_stim1_catA_stimuli_many = generate_trials('labelA_image_stimuli', 2, True)
            img_stim1_catB_stimuli_many = generate_trials('labelB_image_stimuli', 2, True)
            img_stim2_catA_stimuli_many = generate_trials('targetA_image_stimuli', 2, True)
            img_stim2_catB_stimuli_many = generate_trials('targetB_image_stimuli', 2, True)
            
            rule_box_A.setText(rule_A)
            preblock_response_A.keys = []
            preblock_response_A.rt = []
            _preblock_response_A_allKeys = []
            # keep track of which components have finished
            preblock_AComponents = [rule_box_A, preblock_response_A]
            for thisComponent in preblock_AComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "preblock_A" ---
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *rule_box_A* updates
                if rule_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    rule_box_A.frameNStart = frameN  # exact frame index
                    rule_box_A.tStart = t  # local t and not account for scr refresh
                    rule_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(rule_box_A, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'rule_box_A.started')
                    rule_box_A.setAutoDraw(True)
                
                # *preblock_response_A* updates
                waitOnFlip = False
                if preblock_response_A.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
                    # keep track of start time/frame for later
                    preblock_response_A.frameNStart = frameN  # exact frame index
                    preblock_response_A.tStart = t  # local t and not account for scr refresh
                    preblock_response_A.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(preblock_response_A, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'preblock_response_A.started')
                    preblock_response_A.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(preblock_response_A.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(preblock_response_A.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if preblock_response_A.status == STARTED and not waitOnFlip:
                    theseKeys = preblock_response_A.getKeys(keyList=['e', 'i'], waitRelease=False)
                    _preblock_response_A_allKeys.extend(theseKeys)
                    if len(_preblock_response_A_allKeys):
                        preblock_response_A.keys = _preblock_response_A_allKeys[-1].name  # just the last key pressed
                        preblock_response_A.rt = _preblock_response_A_allKeys[-1].rt
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in preblock_AComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "preblock_A" ---
            for thisComponent in preblock_AComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "preblock_A" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # set up handler to look after randomisation of conditions etc
            trials_Asecond = data.TrialHandler(nReps=reptitions, method='random', 
                extraInfo=expInfo, originPath=-1,
                trialList=data.importConditions('block_layout.xlsx'),
                seed=None, name='trials_Asecond')
            thisExp.addLoop(trials_Asecond)  # add the loop to the experiment
            thisTrials_Asecond = trials_Asecond.trialList[0]  # so we can initialise stimuli with some values
            # abbreviate parameter names if possible (e.g. rgb = thisTrials_Asecond.rgb)
            if thisTrials_Asecond != None:
                for paramName in thisTrials_Asecond:
                    exec('{} = thisTrials_Asecond[paramName]'.format(paramName))
            
            for thisTrials_Asecond in trials_Asecond:
                currentLoop = trials_Asecond
                # abbreviate parameter names if possible (e.g. rgb = thisTrials_Asecond.rgb)
                if thisTrials_Asecond != None:
                    for paramName in thisTrials_Asecond:
                        exec('{} = thisTrials_Asecond[paramName]'.format(paramName))
                
                # --- Prepare to start Routine "trial_A" ---
                continueRoutine = True
                routineForceEnded = False
                # update component parameters for each repeat
                # Run 'Begin Routine' code from trial_code_A
                # Option to simulates using ResponseEmulator:
                if Monkey:
                    simulated_responses = [(0.5, 'e'), (0.5, 'i')]  # simulated responses take the form (onsetTime, responseKey). You can simulate more than one.
                    responder = ResponseEmulator(simulated_responses)
                    responder.start()
                
                # For each stimlulus, choose a random exemplar from the appropriate list
                # word stimulus 1
                if stimulus1_category == 'a':
                    stimulus1 = stim1_catA_stimuli_many.pop()
                elif stimulus1_category == 'b':
                    stimulus1 = stim1_catB_stimuli_many.pop()
                
                # word stimulus 2
                if stimulus2_category == 'c':
                    stimulus2 = stim2_catA_stimuli_many.pop()
                elif stimulus2_category == 'd':
                    stimulus2 = stim2_catB_stimuli_many.pop()
                
                # image stimulus 1
                if stimulus1_category == 'a':
                    img_stimulus1 = img_stim1_catA_stimuli_many.pop()
                elif stimulus1_category == 'b':
                    img_stimulus1 = img_stim1_catB_stimuli_many.pop()
                
                # image stimulus 2
                if stimulus2_category == 'c':
                    img_stimulus2 = img_stim2_catA_stimuli_many.pop()
                elif stimulus2_category == 'd':
                    img_stimulus2 = img_stim2_catB_stimuli_many.pop()
                
                # set correct and incorrect responses
                if moving_response_options == False:
                    response_option_left = response_option_B  # i.e., the focal trial type is the right hand one, for hand dominance
                    response_option_right = response_option_A
                    response_option_onset = 0  # response options are onscreen constantly
                    if (trialType == 1) or (trialType == 4):
                        required_allowed = 'i'
                        required_correct = 'i'
                        feedback_allowed = 'e'
                        feedback_correct = 'e'
                    elif (trialType == 2) or (trialType == 3):
                        required_allowed = 'e'
                        required_correct = 'e'
                        feedback_allowed = 'i'
                        feedback_correct = 'i'
                elif moving_response_options == True:
                    rand_positions = randint(1, 3)
                    response_option_onset = 0.4  # response options appear with stimuli
                    if rand_positions == 1:
                        response_option_left = response_option_B
                        response_option_right = response_option_A
                        if (trialType == 1) or (trialType == 4):
                            required_allowed = 'i'
                            required_correct = 'i'
                            feedback_allowed = 'e'
                            feedback_correct = 'e'
                        elif (trialType == 2) or (trialType == 3):
                            required_allowed = 'e'
                            required_correct = 'e'
                            feedback_allowed = 'i'
                            feedback_correct = 'i'
                    elif rand_positions == 2:
                        response_option_left = response_option_A
                        response_option_right = response_option_B
                        if (trialType == 1) or (trialType == 4):
                            required_allowed = 'e'
                            required_correct = 'e'
                            feedback_allowed = 'i'
                            feedback_correct = 'i'
                        elif (trialType == 2) or (trialType == 3):
                            required_allowed = 'i'
                            required_correct = 'i'
                            feedback_allowed = 'e'
                            feedback_correct = 'e'
                image_stimulus1_box_A.setPos(image_stimulus1_location)
                image_stimulus1_box_A.setImage(img_stimulus1)
                image_stimulus2_box_A.setPos(image_stimulus2_location)
                image_stimulus2_box_A.setImage(img_stimulus2)
                stimulus1_box_A.setPos(stimulus1_location)
                stimulus1_box_A.setText(stimulus1)
                stimulus2_box_A.setPos(stimulus2_location)
                stimulus2_box_A.setText(stimulus2)
                required_response_A.keys = []
                required_response_A.rt = []
                _required_response_A_allKeys = []
                feedback_response_A.keys = []
                feedback_response_A.rt = []
                _feedback_response_A_allKeys = []
                left_box_A.setPos(response_option_left_location)
                left_box_A.setText(response_option_left)
                right_box_A.setPos(response_option_right_location)
                right_box_A.setText(response_option_right)
                accuracy_feedback_box_A.setPos(accuracy_feedback_location)
                # keep track of which components have finished
                trial_AComponents = [image_stimulus1_box_A, image_stimulus2_box_A, stimulus1_box_A, stimulus2_box_A, required_response_A, feedback_response_A, left_box_A, right_box_A, accuracy_feedback_box_A]
                for thisComponent in trial_AComponents:
                    thisComponent.tStart = None
                    thisComponent.tStop = None
                    thisComponent.tStartRefresh = None
                    thisComponent.tStopRefresh = None
                    if hasattr(thisComponent, 'status'):
                        thisComponent.status = NOT_STARTED
                # reset timers
                t = 0
                _timeToFirstFrame = win.getFutureFlipTime(clock="now")
                frameN = -1
                
                # --- Run Routine "trial_A" ---
                while continueRoutine:
                    # get current time
                    t = routineTimer.getTime()
                    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                    # update/draw components on each frame
                    # Run 'Each Frame' code from trial_code_A
                    # Accuracy feedback message
                    if len(feedback_response_A.keys)<1:
                        accuracyFeedback=""
                    else:
                        accuracyFeedback="X"
                    
                    # *image_stimulus1_box_A* updates
                    if image_stimulus1_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                        # keep track of start time/frame for later
                        image_stimulus1_box_A.frameNStart = frameN  # exact frame index
                        image_stimulus1_box_A.tStart = t  # local t and not account for scr refresh
                        image_stimulus1_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(image_stimulus1_box_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_stimulus1_box_A.started')
                        image_stimulus1_box_A.setAutoDraw(True)
                    
                    # *image_stimulus2_box_A* updates
                    if image_stimulus2_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                        # keep track of start time/frame for later
                        image_stimulus2_box_A.frameNStart = frameN  # exact frame index
                        image_stimulus2_box_A.tStart = t  # local t and not account for scr refresh
                        image_stimulus2_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(image_stimulus2_box_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_stimulus2_box_A.started')
                        image_stimulus2_box_A.setAutoDraw(True)
                    
                    # *stimulus1_box_A* updates
                    if stimulus1_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                        # keep track of start time/frame for later
                        stimulus1_box_A.frameNStart = frameN  # exact frame index
                        stimulus1_box_A.tStart = t  # local t and not account for scr refresh
                        stimulus1_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(stimulus1_box_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'stimulus1_box_A.started')
                        stimulus1_box_A.setAutoDraw(True)
                    
                    # *stimulus2_box_A* updates
                    if stimulus2_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                        # keep track of start time/frame for later
                        stimulus2_box_A.frameNStart = frameN  # exact frame index
                        stimulus2_box_A.tStart = t  # local t and not account for scr refresh
                        stimulus2_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(stimulus2_box_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'stimulus2_box_A.started')
                        stimulus2_box_A.setAutoDraw(True)
                    
                    # *required_response_A* updates
                    waitOnFlip = False
                    if required_response_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                        # keep track of start time/frame for later
                        required_response_A.frameNStart = frameN  # exact frame index
                        required_response_A.tStart = t  # local t and not account for scr refresh
                        required_response_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(required_response_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'required_response_A.started')
                        required_response_A.status = STARTED
                        # AllowedKeys looks like a variable named `required_allowed`
                        if not type(required_allowed) in [list, tuple, np.ndarray]:
                            if not isinstance(required_allowed, str):
                                logging.error('AllowedKeys variable `required_allowed` is not string- or list-like.')
                                core.quit()
                            elif not ',' in required_allowed:
                                required_allowed = (required_allowed,)
                            else:
                                required_allowed = eval(required_allowed)
                        # keyboard checking is just starting
                        waitOnFlip = True
                        win.callOnFlip(required_response_A.clock.reset)  # t=0 on next screen flip
                        win.callOnFlip(required_response_A.clearEvents, eventType='keyboard')  # clear events on next screen flip
                    if required_response_A.status == STARTED and not waitOnFlip:
                        theseKeys = required_response_A.getKeys(keyList=list(required_allowed), waitRelease=False)
                        _required_response_A_allKeys.extend(theseKeys)
                        if len(_required_response_A_allKeys):
                            required_response_A.keys = _required_response_A_allKeys[0].name  # just the first key pressed
                            required_response_A.rt = _required_response_A_allKeys[0].rt
                            # was this correct?
                            if (required_response_A.keys == str(required_correct)) or (required_response_A.keys == required_correct):
                                required_response_A.corr = 1
                            else:
                                required_response_A.corr = 0
                            # a response ends the routine
                            continueRoutine = False
                    
                    # *feedback_response_A* updates
                    waitOnFlip = False
                    if feedback_response_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                        # keep track of start time/frame for later
                        feedback_response_A.frameNStart = frameN  # exact frame index
                        feedback_response_A.tStart = t  # local t and not account for scr refresh
                        feedback_response_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(feedback_response_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'feedback_response_A.started')
                        feedback_response_A.status = STARTED
                        # AllowedKeys looks like a variable named `feedback_allowed`
                        if not type(feedback_allowed) in [list, tuple, np.ndarray]:
                            if not isinstance(feedback_allowed, str):
                                logging.error('AllowedKeys variable `feedback_allowed` is not string- or list-like.')
                                core.quit()
                            elif not ',' in feedback_allowed:
                                feedback_allowed = (feedback_allowed,)
                            else:
                                feedback_allowed = eval(feedback_allowed)
                        # keyboard checking is just starting
                        waitOnFlip = True
                        win.callOnFlip(feedback_response_A.clock.reset)  # t=0 on next screen flip
                        win.callOnFlip(feedback_response_A.clearEvents, eventType='keyboard')  # clear events on next screen flip
                    if feedback_response_A.status == STARTED and not waitOnFlip:
                        theseKeys = feedback_response_A.getKeys(keyList=list(feedback_allowed), waitRelease=False)
                        _feedback_response_A_allKeys.extend(theseKeys)
                        if len(_feedback_response_A_allKeys):
                            feedback_response_A.keys = _feedback_response_A_allKeys[0].name  # just the first key pressed
                            feedback_response_A.rt = _feedback_response_A_allKeys[0].rt
                            # was this correct?
                            if (feedback_response_A.keys == str(feedback_correct)) or (feedback_response_A.keys == feedback_correct):
                                feedback_response_A.corr = 1
                            else:
                                feedback_response_A.corr = 0
                    
                    # *left_box_A* updates
                    if left_box_A.status == NOT_STARTED and tThisFlip >= response_option_onset-frameTolerance:
                        # keep track of start time/frame for later
                        left_box_A.frameNStart = frameN  # exact frame index
                        left_box_A.tStart = t  # local t and not account for scr refresh
                        left_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(left_box_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'left_box_A.started')
                        left_box_A.setAutoDraw(True)
                    
                    # *right_box_A* updates
                    if right_box_A.status == NOT_STARTED and tThisFlip >= response_option_onset-frameTolerance:
                        # keep track of start time/frame for later
                        right_box_A.frameNStart = frameN  # exact frame index
                        right_box_A.tStart = t  # local t and not account for scr refresh
                        right_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(right_box_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'right_box_A.started')
                        right_box_A.setAutoDraw(True)
                    
                    # *accuracy_feedback_box_A* updates
                    if accuracy_feedback_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                        # keep track of start time/frame for later
                        accuracy_feedback_box_A.frameNStart = frameN  # exact frame index
                        accuracy_feedback_box_A.tStart = t  # local t and not account for scr refresh
                        accuracy_feedback_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(accuracy_feedback_box_A, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'accuracy_feedback_box_A.started')
                        accuracy_feedback_box_A.setAutoDraw(True)
                    if accuracy_feedback_box_A.status == STARTED:  # only update if drawing
                        accuracy_feedback_box_A.setText(accuracyFeedback, log=False)
                    
                    # check for quit (typically the Esc key)
                    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                        core.quit()
                    
                    # check if all components have finished
                    if not continueRoutine:  # a component has requested a forced-end of Routine
                        routineForceEnded = True
                        break
                    continueRoutine = False  # will revert to True if at least one component still running
                    for thisComponent in trial_AComponents:
                        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                            continueRoutine = True
                            break  # at least one component has not yet finished
                    
                    # refresh the screen
                    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                        win.flip()
                
                # --- Ending Routine "trial_A" ---
                for thisComponent in trial_AComponents:
                    if hasattr(thisComponent, "setAutoDraw"):
                        thisComponent.setAutoDraw(False)
                # Run 'End Routine' code from trial_code_A
                # save exemplars to experiment handler so they're written to the csv file
                thisExp.addData('stimulus1', stimulus1)
                thisExp.addData('stimulus2', stimulus2)
                thisExp.addData('img_stimulus1', img_stimulus1)
                thisExp.addData('img_stimulus2', img_stimulus2)
                thisExp.addData('response_option_left', response_option_left)
                thisExp.addData('response_option_right', response_option_right)
                # check responses
                if required_response_A.keys in ['', [], None]:  # No response was made
                    required_response_A.keys = None
                    # was no response the correct answer?!
                    if str(required_correct).lower() == 'none':
                       required_response_A.corr = 1;  # correct non-response
                    else:
                       required_response_A.corr = 0;  # failed to respond (incorrectly)
                # store data for trials_Asecond (TrialHandler)
                trials_Asecond.addData('required_response_A.keys',required_response_A.keys)
                trials_Asecond.addData('required_response_A.corr', required_response_A.corr)
                if required_response_A.keys != None:  # we had a response
                    trials_Asecond.addData('required_response_A.rt', required_response_A.rt)
                # check responses
                if feedback_response_A.keys in ['', [], None]:  # No response was made
                    feedback_response_A.keys = None
                    # was no response the correct answer?!
                    if str(feedback_correct).lower() == 'none':
                       feedback_response_A.corr = 1;  # correct non-response
                    else:
                       feedback_response_A.corr = 0;  # failed to respond (incorrectly)
                # store data for trials_Asecond (TrialHandler)
                trials_Asecond.addData('feedback_response_A.keys',feedback_response_A.keys)
                trials_Asecond.addData('feedback_response_A.corr', feedback_response_A.corr)
                if feedback_response_A.keys != None:  # we had a response
                    trials_Asecond.addData('feedback_response_A.rt', feedback_response_A.rt)
                # the Routine "trial_A" was not non-slip safe, so reset the non-slip timer
                routineTimer.reset()
                thisExp.nextEntry()
                
            # completed reptitions repeats of 'trials_Asecond'
            
            
            # --- Prepare to start Routine "postblock_A" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            # Run 'Begin Routine' code from postblock_code_A
            # Option to simulates using ResponseEmulator:
            if Monkey:
                simulated_responses = [(1.1, 'e'), (1.1, 'i')]  # simulated responses take the form (onsetTime, responseKey). You can simulate more than one.
                responder = ResponseEmulator(simulated_responses)
                responder.start()
            
            # calculate summary stats
            if(starting_block == 'a'): 
                block_A_percentage_accuracy = (float(trials_Afirst.data['required_response_A.corr'].count()) - float(trials_Afirst.data['feedback_response_A.corr'].sum())) /  float(trials_Afirst.data['required_response_A.corr'].count()) * 100 
                block_A_median_latency = np.median(trials_Afirst.data['required_response_A.rt'])
            
            if(starting_block == 'b'): 
                block_A_percentage_accuracy = (float(trials_Asecond.data['required_response_A.corr'].count()) - float(trials_Asecond.data['feedback_response_A.corr'].sum())) /  float(trials_Asecond.data['required_response_A.corr'].count()) * 100 
                block_A_median_latency = np.median(trials_Asecond.data['required_response_A.rt'])
            
            # set messages
            msg_accuracy = "%s %i %s" %(accuracy, block_A_percentage_accuracy, percentCorrect) 
            msg_latency = "%s %.2f %s" %(speed, block_A_median_latency, seconds)
            
            ### save summary stats to experiment handler so they're written to the csv file
            ##thisExp.addData('block_A_percentage_accuracy', block_A_percentage_accuracy)
            ##thisExp.addData('block_A_median_latency', block_A_median_latency)
            aim_box_A.setText(aim)
            accuracy_box_A.setText(msg_accuracy)
            latency_box_A.setText(msg_latency)
            press_box_A.setText(press_message)
            postblock_response_A.keys = []
            postblock_response_A.rt = []
            _postblock_response_A_allKeys = []
            # keep track of which components have finished
            postblock_AComponents = [aim_box_A, accuracy_box_A, latency_box_A, press_box_A, postblock_response_A]
            for thisComponent in postblock_AComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "postblock_A" ---
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *aim_box_A* updates
                if aim_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    aim_box_A.frameNStart = frameN  # exact frame index
                    aim_box_A.tStart = t  # local t and not account for scr refresh
                    aim_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(aim_box_A, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'aim_box_A.started')
                    aim_box_A.setAutoDraw(True)
                
                # *accuracy_box_A* updates
                if accuracy_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    accuracy_box_A.frameNStart = frameN  # exact frame index
                    accuracy_box_A.tStart = t  # local t and not account for scr refresh
                    accuracy_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(accuracy_box_A, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'accuracy_box_A.started')
                    accuracy_box_A.setAutoDraw(True)
                
                # *latency_box_A* updates
                if latency_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    latency_box_A.frameNStart = frameN  # exact frame index
                    latency_box_A.tStart = t  # local t and not account for scr refresh
                    latency_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(latency_box_A, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'latency_box_A.started')
                    latency_box_A.setAutoDraw(True)
                
                # *press_box_A* updates
                if press_box_A.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
                    # keep track of start time/frame for later
                    press_box_A.frameNStart = frameN  # exact frame index
                    press_box_A.tStart = t  # local t and not account for scr refresh
                    press_box_A.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(press_box_A, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'press_box_A.started')
                    press_box_A.setAutoDraw(True)
                
                # *postblock_response_A* updates
                waitOnFlip = False
                if postblock_response_A.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
                    # keep track of start time/frame for later
                    postblock_response_A.frameNStart = frameN  # exact frame index
                    postblock_response_A.tStart = t  # local t and not account for scr refresh
                    postblock_response_A.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(postblock_response_A, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'postblock_response_A.started')
                    postblock_response_A.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(postblock_response_A.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(postblock_response_A.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if postblock_response_A.status == STARTED and not waitOnFlip:
                    theseKeys = postblock_response_A.getKeys(keyList=['e', 'i'], waitRelease=False)
                    _postblock_response_A_allKeys.extend(theseKeys)
                    if len(_postblock_response_A_allKeys):
                        postblock_response_A.keys = _postblock_response_A_allKeys[-1].name  # just the last key pressed
                        postblock_response_A.rt = _postblock_response_A_allKeys[-1].rt
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in postblock_AComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "postblock_A" ---
            for thisComponent in postblock_AComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "postblock_A" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
        # completed Asecond_nReps repeats of 'Asecond'
        
    # completed complete_test_blocks repeats of 'test_blocks'
    
    
    # --- Prepare to start Routine "end" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    end_box.setText(end_message)
    end_response.keys = []
    end_response.rt = []
    _end_response_allKeys = []
    # keep track of which components have finished
    endComponents = [end_box, end_response]
    for thisComponent in endComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "end" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *end_box* updates
        if end_box.status == NOT_STARTED and tThisFlip >= 0.4-frameTolerance:
            # keep track of start time/frame for later
            end_box.frameNStart = frameN  # exact frame index
            end_box.tStart = t  # local t and not account for scr refresh
            end_box.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(end_box, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'end_box.started')
            end_box.setAutoDraw(True)
        
        # *end_response* updates
        waitOnFlip = False
        if end_response.status == NOT_STARTED and tThisFlip >= .4-frameTolerance:
            # keep track of start time/frame for later
            end_response.frameNStart = frameN  # exact frame index
            end_response.tStart = t  # local t and not account for scr refresh
            end_response.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(end_response, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'end_response.started')
            end_response.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(end_response.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(end_response.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if end_response.status == STARTED and not waitOnFlip:
            theseKeys = end_response.getKeys(keyList=['return'], waitRelease=False)
            _end_response_allKeys.extend(theseKeys)
            if len(_end_response_allKeys):
                end_response.keys = _end_response_allKeys[-1].name  # just the last key pressed
                end_response.rt = _end_response_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in endComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "end" ---
    for thisComponent in endComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 1 repeats of 'task'


# --- End experiment ---
# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
