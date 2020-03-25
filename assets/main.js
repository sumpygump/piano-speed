window.onload = function(e) {
    Game.init();
    MidiKernel.init(Game.onMidiMessage, Game);
};

const Keydefs = {
    // is = sharp, es = flat
    ces: ["Gb"],
    c: ["C", "F", "G", "Bb", "Eb", "Ab", "Db"],
    cis: ["D", "A", "E", "B", "F#"],
    des: ["Ab", "Db", "Gb"],
    d: ["C", "F", "G", "Bb", "D", "Eb", "A"],
    dis: ["E", "B", "F#"],
    ees: ["Bb", "Eb", "Ab", "Db", "Gb"],
    e: ["C", "F", "G", "D", "A", "E", "B"],
    eis: ["F#"],
    f: ["C", "F", "Bb", "Eb", "Ab", "Db", "Gb"],
    fis: ["G", "D", "A", "E", "B", "F#"],
    ges: ["Db", "Gb"],
    g: ["C", "F", "G", "Bb", "D", "Eb", "Ab"],
    gis: ["A", "E", "B", "F#"],
    aes: ["Eb", "Ab", "Db", "Gb"],
    a: ["C", "F", "G", "Bb", "D", "A", "E"],
    ais: ["B", "F#"],
    bes: ["F", "Bb", "Eb", "Ab", "Db", "Gb"],
    b: ["C", "G", "D", "A", "E", "B", "F#"],
};

const Notes = [
    {note_number: 45, pos: ['a', '', 2], keys: Keydefs.a, tags: ["l2"], clefs: ["bass"]},
    {note_number: 46, pos: ['a', '#', 2], keys: Keydefs.ais, tags: ["hard"], clefs: ["bass"]},
    {note_number: 46, pos: ['b', 'b', 2], keys: Keydefs.bes, tags: ["hard"], clefs: ["bass"]},
    {note_number: 47, pos: ['b', '', 2], keys: Keydefs.b, tags: ["l2"], clefs: ["bass"]},
    {note_number: 47, pos: ['c', 'b', 3], keys: Keydefs.ces, tags: ["hard"], clefs: ["bass"]},
    {note_number: 48, pos: ['c', '', 3], keys: Keydefs.c, tags: ["l2"], clefs: ["bass"]},
    {note_number: 49, pos: ['c', '#', 3], keys: Keydefs.cis, tags: ["hard"], clefs: ["bass"]},
    {note_number: 49, pos: ['d', 'b', 3], keys: Keydefs.des, tags: ["hard"], clefs: ["bass"]},
    {note_number: 50, pos: ['d', '', 3], keys: Keydefs.d, tags: ["l2"], clefs: ["bass"]},
    {note_number: 51, pos: ['d', '#', 3], keys: Keydefs.dis, tags: ["hard"], clefs: ["bass"]},
    {note_number: 51, pos: ['e', 'b', 3], keys: Keydefs.ees, tags: ["hard"], clefs: ["bass"]},
    {note_number: 52, pos: ['e', '', 3], keys: Keydefs.e, tags: ["l2"], clefs: ["bass"]},
    {note_number: 53, pos: ['e', '#', 3], keys: Keydefs.eis, tags: ["hard"], clefs: ["bass"]},
    {note_number: 53, pos: ['f', '', 3], keys: Keydefs.f, tags: ["l2"], clefs: ["bass"]},
    {note_number: 54, pos: ['f', '#', 3], keys: Keydefs.fis, tags: ["hard"], clefs: ["bass"]},
    {note_number: 54, pos: ['g', 'b', 3], keys: Keydefs.ges, tags: ["hard"], clefs: ["bass"]},
    {note_number: 55, pos: ['g', '', 3], keys: Keydefs.g, tags: ["l2"], clefs: ["bass"]},
    {note_number: 56, pos: ['g', '#', 3], keys: Keydefs.gis, tags: ["hard"], clefs: ["bass"]},
    {note_number: 56, pos: ['a', 'b', 3], keys: Keydefs.aes, tags: ["hard"], clefs: ["bass"]},
    {note_number: 57, pos: ['a', '', 3], keys: Keydefs.a, tags: ["l1", "l2"], clefs: ["bass", "treble"]},
    {note_number: 58, pos: ['a', '#', 3], keys: Keydefs.ais, tags: ["hard"], clefs: ["bass", "treble"]},
    {note_number: 58, pos: ['b', 'b', 3], keys: Keydefs.bes, tags: ["hard"], clefs: ["bass", "treble"]},
    {note_number: 59, pos: ['b', '', 3], keys: Keydefs.b, tags: ["l2"], clefs: ["bass", "treble"]},
    {note_number: 59, pos: ['c', 'b', 4], keys: Keydefs.ces, tags: ["hard"], clefs: ["bass", "treble"]},
    {note_number: 60, pos: ['c', '', 4], keys: Keydefs.c, tags: ["l1", "l2"], clefs: ["bass", "treble"]},
    {note_number: 61, pos: ['c', '#', 4], keys: Keydefs.cis, tags: ["hard"], clefs: ["treble"]},
    {note_number: 61, pos: ['d', 'b', 4], keys: Keydefs.des, tags: ["hard"], clefs: ["treble"]},
    {note_number: 62, pos: ['d', '', 4], keys: Keydefs.d, tags: ["l1"], clefs: ["treble"]},
    {note_number: 63, pos: ['d', '#', 4], keys: Keydefs.dis, tags: ["hard"], clefs: ["treble"]},
    {note_number: 63, pos: ['e', 'b', 4], keys: Keydefs.ees, tags: ["hard"], clefs: ["treble"]},
    {note_number: 64, pos: ['e', '', 4], keys: Keydefs.e, tags: ["l1"], clefs: ["treble"]},
    {note_number: 65, pos: ['e', '#', 4], keys: Keydefs.eis, tags: ["hard"], clefs: ["treble"]},
    {note_number: 65, pos: ['f', '', 4], keys: Keydefs.f, tags: ["l1"], clefs: ["treble"]},
    {note_number: 66, pos: ['f', '#', 4], keys: Keydefs.fis, tags: ["hard"], clefs: ["treble"]},
    {note_number: 66, pos: ['g', 'b', 4], keys: Keydefs.ges, tags: ["hard"], clefs: ["treble"]},
    {note_number: 67, pos: ['g', '', 4], keys: Keydefs.g, tags: ["l1"], clefs: ["treble"]},
    {note_number: 68, pos: ['g', '#', 4], keys: Keydefs.gis, tags: ["hard"], clefs: ["treble"]},
    {note_number: 68, pos: ['a', 'b', 4], keys: Keydefs.aes, tags: ["hard"], clefs: ["treble"]},
    {note_number: 69, pos: ['a', '', 4], keys: Keydefs.a, tags: ["l1"], clefs: ["treble"]},
    {note_number: 70, pos: ['a', '#', 4], keys: Keydefs.ais, tags: ["hard"], clefs: ["treble"]},
    {note_number: 70, pos: ['b', 'b', 4], keys: Keydefs.bes, tags: ["hard"], clefs: ["treble"]},
    {note_number: 71, pos: ['b', '', 4], keys: Keydefs.b, tags: ["l1"], clefs: ["treble"]},
    {note_number: 71, pos: ['c', 'b', 5], keys: Keydefs.ces, tags: ["hard"], clefs: ["treble"]},
    {note_number: 72, pos: ['c', '', 5], keys: Keydefs.c, tags: ["l1"], clefs: ["treble"]},
    {note_number: 73, pos: ['c', '#', 5], keys: Keydefs.cis, tags: ["hard"], clefs: ["treble"]},
    {note_number: 73, pos: ['d', 'b', 5], keys: Keydefs.des, tags: ["hard"], clefs: ["treble"]},
    {note_number: 74, pos: ['d', '', 5], keys: Keydefs.d, tags: ["medium"], clefs: ["treble"]},
    {note_number: 75, pos: ['d', '#', 5], keys: Keydefs.dis, tags: ["hard"], clefs: ["treble"]},
    {note_number: 75, pos: ['e', 'b', 5], keys: Keydefs.ees, tags: ["hard"], clefs: ["treble"]},
    {note_number: 76, pos: ['e', '', 5], keys: Keydefs.e, tags: ["medium"], clefs: ["treble"]},
    {note_number: 77, pos: ['e', '#', 5], keys: Keydefs.eis, tags: ["hard"], clefs: ["treble"]},
    {note_number: 77, pos: ['f', '', 5], keys: Keydefs.f, tags: ["medium"], clefs: ["treble"]},
    {note_number: 78, pos: ['f', '#', 5], keys: Keydefs.fis, tags: ["hard"], clefs: ["treble"]},
    {note_number: 78, pos: ['g', 'b', 5], keys: Keydefs.ges, tags: ["hard"], clefs: ["treble"]},
    {note_number: 79, pos: ['g', '', 5], keys: Keydefs.g, tags: ["medium"], clefs: ["treble"]},
    {note_number: 80, pos: ['g', '#', 5], keys: Keydefs.gis, tags: ["hard"], clefs: ["treble"]},
    {note_number: 80, pos: ['a', 'b', 5], keys: Keydefs.aes, tags: ["hard"], clefs: ["treble"]},
    {note_number: 81, pos: ['a', '', 5], keys: Keydefs.a, tags: ["medium"], clefs: ["treble"]},
    {note_number: 82, pos: ['a', '#', 5], keys: Keydefs.ais, tags: ["hard"], clefs: ["treble"]},
    {note_number: 82, pos: ['b', 'b', 5], keys: Keydefs.bes, tags: ["hard"], clefs: ["treble"]},
    {note_number: 83, pos: ['b', '', 5], keys: Keydefs.b, tags: ["medium"], clefs: ["treble"]},
    {note_number: 83, pos: ['c', 'b', 6], keys: Keydefs.ces, tags: ["hard"], clefs: ["treble"]},
];

const Levels = [
    {name: "Level 1", tags: ["l1"], key: "C", clef: "treble"},
    {name: "Level 2", tags: ["l2"], key: "C", clef: "bass"},
    {name: "Level 3", tags: ["l1"], key: "F", clef: "treble"},
    {name: "Level 4", tags: ["l1", "hard"], key: "C", clef: "treble"},
    {name: "Level 5", tags: ["l1", "hard"], key: "F", clef: "treble", accidentals: true},
    {name: "Level 6", tags: ["l1", "l2", "medium", "hard"], key: "C", clef: "treble", accidentals: true},
    {name: "Level 7", tags: ["l1", "l2", "medium", "hard"], key: "C", clef: "bass", accidentals: true},
    {name: "Level 8", tags: ["l1", "l2", "medium", "hard"], key: "G", clef: "treble", accidentals: false},
    {name: "Level 9", tags: ["l1", "l2", "medium", "hard"], key: "Bb", clef: "treble", accidentals: false},
    {name: "Level 10", tags: ["l1", "l2", "medium", "hard"], key: "D", clef: "treble", accidentals: false},
    {name: "Level 11", tags: ["l1", "l2", "medium", "hard"], key: "Eb", clef: "treble", accidentals: false},
    {name: "Level 12", tags: ["l1", "l2", "medium", "hard"], key: "A", clef: "treble", accidentals: false},
    {name: "Level 13", tags: ["l1", "l2", "medium", "hard"], key: "Ab", clef: "treble", accidentals: false},
    {name: "Level 14", tags: ["l1", "l2", "medium", "hard"], key: "E", clef: "treble", accidentals: false},
    {name: "Level 15", tags: ["l1", "l2", "medium", "hard"], key: "Db", clef: "treble", accidentals: false},
    {name: "Level 16", tags: ["l1", "l2", "medium", "hard"], key: "B", clef: "treble", accidentals: false},
    {name: "Level 17", tags: ["l1", "l2", "medium", "hard"], key: "Gb", clef: "treble", accidentals: false},
    {name: "Level 18", tags: ["l1", "l2", "medium", "hard"], key: "F#", clef: "treble", accidentals: false},
];

const MidiMessage = {
    KEYON: 144,
    KEYOFF: 128
};

const POINTS_PER_LEVEL = 10;

var Game = {
    levelIndex: 0, // Level index number
    level: null, // Level data
    points: 0, // Current points
    penalties: 0, // Current penalties
    active: null, // The active note being quizzed
    listening: false, // Whether midi input should be analyzed
    arena: null, // Arena dom element
    pointsElem: null, // Points dom element
    penaltiesElem: null, // Penalties dom element
    levelElem: null, // Dom element showing level information
    staveElem: null, // Stave element - where the notes are rendered
    noteDisplayElem: null, // Place to show the note you just played
    resultElem: null, // Dom element for showing whether wrong or right

    init: function() {
        this.arena = document.getElementById("game");

        const pointBox = document.createElement('div');
        pointBox.classList.add('point-box');

        this.pointsElem = this.makeElement('div', 'points', this.points);
        pointBox.appendChild(this.pointsElem);

        this.penaltiesElem = this.makeElement('div', 'penalties', this.penalties);
        pointBox.appendChild(this.penaltiesElem);

        this.arena.appendChild(pointBox);

        this.levelElem = this.makeElement('div', 'level', ' ');
        this.arena.appendChild(this.levelElem);

        this.staveElem = this.makeElement('div', 'stave', ' ');
        this.arena.appendChild(this.staveElem);

        this.noteDisplayElem = this.makeElement('div', 'note_name', ' ');
        this.arena.appendChild(this.noteDisplayElem);

        this.resultElem = this.makeElement('div', 'result', ' ');
        this.arena.appendChild(this.resultElem);

        this.startLevel();
    },
    makeElement: function(elementName, id, content) {
        const elem = document.createElement(elementName);
        elem.setAttribute('id', id);
        elem.innerHTML = content;
        return elem;
    },
    startLevel: function() {
        this.level = Levels[this.levelIndex];
        this.putMessage('');
        this.makeLevel(this.level);
        this.levelElem.innerHTML = this.level.name;
        this.prompt();
    },
    makeLevel: function(level) {
        this.levelNotes = Notes.filter(function(val, index) {
            var match_tags = false;
            for (i in level.tags) {
                if (val.tags.includes(level.tags[i])) {
                    match_tags = true;
                }
            }

            if (level.accidentals == true) {
                // With accidentals toggled on we match any key
                var key_matches = true;
            } else {
                var key_matches = val.keys.includes(level.key);
            }

            return match_tags && key_matches && val.clefs.includes(level.clef);
        });
    },
    prompt: function() {
        this.putMessage('&nbsp;');
        this.clearNoteName();
        MusicCanvas.clear().init(this.level.clef, this.level.key);

        // Pick a random note to quiz
        this.active = this.levelNotes[Math.floor(Math.random() * this.levelNotes.length)];

        // Draw the note
        noteData = this.active.pos;

        var isInKey = this.active.keys.includes(this.level.key)
        var forceNatural = this.shouldForceNatural(noteData[0], noteData[1], this.level.key);
        MusicCanvas.makeNote(noteData[0], noteData[1], noteData[2], isInKey, forceNatural);
        this.listening = true;
    },
    shouldForceNatural: function(noteName, acc, key) {
        // Determine when the natural sign must be used when making an
        // accidental in certain keys
        if (acc !== '') {
            return false;
        }

        if ((key == 'F' || key == 'Dm')
            && (noteName == 'b')
        ) {
            return true;
        }
        if ((key == 'G' || key == 'Em')
            && (noteName == 'f')
        ) {
            return true;
        }
        if ((key == 'Bb' || key == 'Gm')
            && (noteName == 'b' || noteName == 'e')
        ) {
            return true;
        }
        if ((key == 'D' || key == 'Bm')
            && (noteName == 'f' || noteName == 'c')
        ) {
            return true;
        }
        if ((key == 'Eb' || key == 'Cm')
            && (noteName == 'b' || noteName == 'e' || noteName == 'a')
        ) {
            return true;
        }
        if ((key == 'A' || key == 'F#m')
            && (noteName == 'f' || noteName == 'c' || noteName == 'g')
        ) {
            return true;
        }
        if ((key == 'Ab' || key == 'Fm')
            && (noteName == 'b' || noteName == 'e' || noteName == 'a' || noteName == 'd')
        ) {
            return true;
        }
        if ((key == 'E' || key == 'C#m')
            && (noteName == 'f' || noteName == 'c' || noteName == 'g' || noteName == 'd')
        ) {
            return true;
        }
        if ((key == 'Db' || key == 'Bbm')
            && (noteName == 'b' || noteName == 'e' || noteName == 'a' || noteName == 'd' || noteName == 'g')
        ) {
            return true;
        }
        if ((key == 'B' || key == 'G#m')
            && (noteName == 'f' || noteName == 'c' || noteName == 'g' || noteName == 'd' || noteName == 'a')
        ) {
            return true;
        }
        if ((key == 'Gb' || key == 'Ebm')
            && (noteName == 'b' || noteName == 'e' || noteName == 'a' || noteName == 'd' || noteName == 'g' || noteName == 'c')
        ) {
            return true;
        }
        if ((key == 'F#' || key == 'D#m')
            && (noteName == 'f' || noteName == 'c' || noteName == 'g' || noteName == 'd' || noteName == 'a' || noteName == 'e')
        ) {
            return true;
        }

        return false;
    },
    onMidiMessage: function(midiMessageEvent) {
        data = midiMessageEvent.data;
        const msg = data[0];
        const noteNumber = data[1];

        if (msg == MidiMessage.KEYOFF) {
            MidiKernel.midiMessageOff();
        }

        if (this.listening == false) {
            return;
        }

        if (msg == MidiMessage.KEYON) {
            MidiKernel.midiMessageOn();
            if (noteNumber == this.active.note_number) {
                this.isCorrect();
            } else {
                this.isIncorrect();
            }
        }
    },
    isCorrect: function() {
        this.listening = false;
        this.displayNoteName(this.active);
        document.querySelector('.board').classList.remove('board_error');
        this.putMessage('Correct!', 'success');
        MusicCanvas.group.classList.add('correct');
        this.addPoint();

        if (this.points > 1 && this.points % POINTS_PER_LEVEL == 0) {
            setTimeout(this.advanceLevel.bind(this), 500);
        } else {
            setTimeout(this.prompt.bind(this), 500);
        }
    },
    isIncorrect: function() {
        this.putMessage('Try again!', 'error');
        this.addPenalty();
        document.querySelector('.board').classList.add('board_error');
    },
    displayNoteName: function(active) {
        noteName = active.pos[0];
        acc = active.pos[1].replace('#', '&#9839;').replace('n', '&#9838;').replace('b', '&#9837;');
        this.noteDisplayElem.innerHTML = noteName + acc;
    },
    clearNoteName: function() {
        this.noteDisplayElem.innerHTML = '&nbsp;';
    },
    putMessage: function(message, class_) {
        this.resultElem.classList.remove('success');
        this.resultElem.classList.remove('error');
        this.resultElem.classList.add(class_);
        this.resultElem.innerHTML = message;
    },
    addPoint: function() {
        this.points++;
        this.pointsElem.innerHTML = this.points;
    },
    addPenalty: function() {
        this.penalties++;
        this.penaltiesElem.innerHTML = this.penalties;
    },
    advanceLevel: function() {
        MusicCanvas.clear();
        this.clearNoteName();
        this.putMessage('Great job!');
        setTimeout(function() {
            this.levelIndex++;
            this.startLevel();
        }.bind(this), 2000);
    }
}

var MidiKernel = {
    midi: null,
    onMidiMessageEvent: null, // Function to call when a midi message is received
    bindObject: null, // Object to bind midi message subscriptions to
    init: function(onMidiMessageEvent, bindObject) {
        MidiKernel.onMidiMessageEvent = onMidiMessageEvent;
        MidiKernel.bindObject = bindObject;

        // Start talking to MIDI controller
        if (navigator.requestMIDIAccess) {
            navigator.requestMIDIAccess({
                sysex: true
            }).then(MidiKernel.onMIDISuccess.bind(MidiKernel), MidiKernel.onMIDIFailure);
        } else {
            console.warn("No MIDI support in your browser");
        }
    },
    onMIDISuccess: function(midiData) {
        // This is all our MIDI data
        this.midi = midiData;
        console.log(this);

        var allInputs = this.midi.inputs.values();
        var options = [];

        // Loop over all available inputs and listen for any MIDI input
        for (var input = allInputs.next(); input && !input.done; input = allInputs.next()) {
            options.push({id: input.value.id, name: (input.value.manufacturer + " " + input.value.name).trim()});
        }

        this.makeMidiSelector.bind(this)(options);
        this.setMidiInputDevice(options[0].id);
    },
    onMIDIFailure: function() {
        console.warn("Not recognising MIDI controller");
        document.getElementById('midi_error').appendChild(
            document.createTextNode("Midi error: Cannot connect")
        );
    },
    makeMidiSelector: function(options) {
        const s = document.createElement('select');
        for (i in options) {
            var o = document.createElement('option');
            o.setAttribute("value", options[i].id);
            o.appendChild(document.createTextNode(options[i].name));
            s.appendChild(o);
        }

        document.getElementById('midi_select').appendChild(s);

        // When user selects an input, bind the onmidimessage to that one
        s.addEventListener('input', function (event) {
            MidiKernel.onSelectUpdate.bind(MidiKernel)(event.target);
        }, false);
    },
    onSelectUpdate: function(option) {
        // Bind the onmidimessage to the chosen midi input
        this.setMidiInputDevice(option.value);
    },
    setMidiInputDevice: function(id) {
        var allInputs = this.midi.inputs.values();
        for (var input = allInputs.next(); input && !input.done; input = allInputs.next()) {
            if (input.value.id == id) {
                input.value.onmidimessage = this.onMidiMessageEvent.bind(this.bindObject);
            } else {
                input.value.onmidimessage = null;
            }
        }
    },
    midiMessageOn: function() {
        document.getElementById("midi_mon").classList.add("active");
    },
    midiMessageOff: function() {
        document.getElementById("midi_mon").classList.remove("active");
    }
}

var MusicCanvas = {
    context: null,
    stave: null,
    clef: "treble",
    keySpec: "C",
    group: null, // For tracking the notes drawn
    init: function(clef, keySpec) {
        VF = Vex.Flow;
        if (typeof(clef) == "string") {
            this.clef = clef;
        }

        if (typeof(keySpec) == "string") {
            this.keySpec = keySpec;
        }

        // Create an SVG renderer and attach it to the DIV element
        var div = document.getElementById("stave")
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
        var width = 300;
        var height = 375;

        // Configure the rendering context.
        renderer.resize(width, height);
        this.context = renderer.getContext();
        this.context.scale(2, 2);

        // Create a stave with width at position 10, 40 on the canvas.
        this.stave = new VF.Stave(0, 40, width - 20);

        // Add a clef
        this.stave.addClef(this.clef).addKeySignature(this.keySpec);

        // Connect it to the rendering context and draw!
        this.stave.setContext(this.context).draw();
    },
    makeNote: function(letter, acc, octave, isInKey, forceNatural) {
        if (isInKey == undefined) {
            isInKey = false;
        }

        if (forceNatural == undefined) {
            forceNatural = false;
        }
        var tickContext = new Vex.Flow.TickContext();
        var durations = ['8', '4', '2', '1'];
        const note = new Vex.Flow.StaveNote({
            clef: this.clef,
            keys: [`${letter}${acc}/${octave}`],
            duration: durations[Math.floor(Math.random() * durations.length)],
        })
        .setContext(this.context)
        .setStave(this.stave);

        if (acc && !isInKey) {
            // If accidental, must force to add it this way
            note.addAccidental(0, new VF.Accidental(acc));
        }

        if (forceNatural) {
            // If not in key force a natural
            note.addAccidental(0, new VF.Accidental('n'));
        }

        tickContext.addTickable(note);
        tickContext.preFormat().setX(10);

        this.group = this.context.openGroup();
        note.draw();
        this.context.closeGroup();

        this.group.classList.add('note');
    },
    clear: function() {
        var svg = document.querySelector("#stave svg");
        if (svg != null) {
            svg.remove();
        }
        return this;
    }
}
