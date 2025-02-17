import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-multiselect {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
    }

    .p-multiselect-trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .p-multiselect-label-container {
        overflow: hidden;
        flex: 1 1 auto;
        cursor: pointer;
    }

    .p-multiselect-label {
        display: block;
        white-space: nowrap;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .p-multiselect-label-empty {
        overflow: hidden;
        visibility: hidden;
    }

    .p-multiselect-token {
        cursor: default;
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
    }

    .p-multiselect-token-icon {
        cursor: pointer;
    }

    .p-multiselect .p-multiselect-panel {
        min-width: 100%;
    }

    .p-multiselect-items-wrapper {
        overflow: auto;
    }

    .p-multiselect-items {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .p-multiselect-item {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
    }

    .p-multiselect-item-group {
        cursor: auto;
    }

    .p-multiselect-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .p-multiselect-filter-container {
        position: relative;
        flex: 1 1 auto;
    }

    .p-multiselect-filter-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
    }

    .p-multiselect-filter-container .p-inputtext {
        width: 100%;
    }

    .p-multiselect-close {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        overflow: hidden;
        position: relative;
        margin-left: auto;
    }

    .p-fluid .p-multiselect {
        display: flex;
    }
}
`;

const inlineStyles = {
    root: ({ props }) => ({ position: props.appendTo === 'self' ? 'relative' : undefined })
};

const classes = {
    root: ({ instance, props }) => [
        'p-multiselect p-component p-inputwrapper',
        {
            'p-multiselect-chip': props.display === 'chip',
            'p-disabled': props.disabled,
            'p-invalid': props.invalid,
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled',
            'p-focus': instance.focused,
            'p-inputwrapper-filled': props.modelValue && props.modelValue.length,
            'p-inputwrapper-focus': instance.focused || instance.overlayVisible,
            'p-overlay-open': instance.overlayVisible
        }
    ],
    labelContainer: 'p-multiselect-label-container',
    label: ({ instance, props }) => [
        'p-multiselect-label',
        {
            'p-placeholder': instance.label === props.placeholder,
            'p-multiselect-label-empty': !props.placeholder && (!props.modelValue || props.modelValue.length === 0)
        }
    ],
    token: 'p-multiselect-token',
    tokenLabel: 'p-multiselect-token-label',
    removeTokenIcon: 'p-multiselect-token-icon',
    trigger: 'p-multiselect-trigger',
    loadingIcon: 'p-multiselect-trigger-icon',
    dropdownIcon: 'p-multiselect-trigger-icon',
    panel: ({ props, instance }) => [
        'p-multiselect-panel p-component',
        {
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    header: 'p-multiselect-header',
    filterContainer: 'p-multiselect-filter-container',
    filterInput: ({ props, instance }) => [
        'p-multiselect-filter p-inputtext p-component',
        {
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
        }
    ],
    filterIcon: 'p-multiselect-filter-icon',
    closeButton: 'p-multiselect-close p-link',
    closeIcon: 'p-multiselect-close-icon',
    wrapper: 'p-multiselect-items-wrapper',
    list: 'p-multiselect-items p-component',
    itemGroup: 'p-multiselect-item-group',
    item: ({ instance, option, index, getItemOptions, props }) => [
        'p-multiselect-item',
        {
            'p-highlight': instance.isSelected(option) && props.highlightOnSelect,
            'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(index, getItemOptions),
            'p-disabled': instance.isOptionDisabled(option)
        }
    ],
    emptyMessage: 'p-multiselect-empty-message'
};

export default BaseStyle.extend({
    name: 'multiselect',
    css,
    classes,
    inlineStyles
});
