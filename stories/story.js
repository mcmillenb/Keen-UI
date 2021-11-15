import {
    smallContainer,
    mediumContainer,
    largeContainer,
    notesDecorator,
} from './decorators';

export function story(StoryComponent, options = {}) {
    const { withSource, withContainer, withNotes } = Object.assign(
        { withSource: true, withContainer: false },
        options
    );

    const storyExport = () => StoryComponent;

    if (withSource || withContainer || withNotes) {
        if (withSource) {
            attachSource(storyExport, StoryComponent);
        }

        if (withContainer) {
            decorate(
                storyExport,
                withContainer === 'small'
                    ? smallContainer
                    : withContainer === 'medium'
                    ? mediumContainer
                    : largeContainer
            );
        }

        if (withNotes) {
            attachNotes(storyExport, withNotes);
        }
    }

    return storyExport;
}

function attachSource(storyExport, StoryComponent) {
    storyExport.parameters = Object.assign({}, storyExport.parameters, {
        source: StoryComponent.__source,
    });
}

function decorate(storyExport, decorator) {
    storyExport.decorators = storyExport.decorators || [];
    storyExport.decorators.push(decorator);
}

function attachNotes(storyExport, notes) {
    decorate(storyExport, notesDecorator(notes));

    storyExport.parameters = Object.assign({}, storyExport.parameters, {
        notes,
    });
}
