import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-treeselect {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
    }

    .p-treeselect-trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .p-treeselect-label-container {
        overflow: hidden;
        flex: 1 1 auto;
        cursor: pointer;
    }

    .p-treeselect-label {
        display: block;
        white-space: nowrap;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .p-treeselect-label-empty {
        overflow: hidden;
        visibility: hidden;
    }

    .p-treeselect-token {
        cursor: default;
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
    }

    .p-treeselect .p-treeselect-panel {
        min-width: 100%;
    }

    .p-treeselect-items-wrapper {
        overflow: auto;
    }

    .p-fluid .p-treeselect {
        display: flex;
    }
}
`;

const inlineStyles = {
    root: ({ props }) => ({ position: props.appendTo === 'self' ? 'relative' : undefined })
};

const classes = {
    root: ({ instance, props }) => [
        'p-treeselect p-component p-inputwrapper',
        {
            'p-treeselect-chip': props.display === 'chip',
            'p-disabled': props.disabled,
            'p-invalid': props.invalid,
            'p-focus': instance.focused,
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled',
            'p-inputwrapper-filled': !instance.emptyValue,
            'p-inputwrapper-focus': instance.focused || instance.overlayVisible
        }
    ],
    labelContainer: 'p-treeselect-label-container',
    label: ({ instance, props }) => [
        'p-treeselect-label',
        {
            'p-placeholder': instance.label === props.placeholder,
            'p-treeselect-label-empty': !props.placeholder && instance.emptyValue
        }
    ],
    token: 'p-treeselect-token',
    tokenLabel: 'p-treeselect-token-label',
    trigger: 'p-treeselect-trigger',
    triggerIcon: 'p-treeselect-trigger-icon',
    panel: ({ props, instance }) => [
        'p-treeselect-panel p-component',
        {
            'p-input-filled': props.variant === 'filled' || instance.$primevue.config.inputStyle === 'filled',
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    wrapper: 'p-treeselect-items-wrapper',
    emptyMessage: 'p-treeselect-empty-message'
};

export default BaseStyle.extend({
    name: 'treeselect',
    css,
    classes,
    inlineStyles
});
