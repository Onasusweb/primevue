<template>
    <DocComponent title="Vue Float Label" header="FloatLabel" description="FloatLabel appears on top of the input field when focused." :componentDocs="docs" :apiDocs="['FloatLabel']" :themingDocs="themingDoc" />
</template>

<script>
import AccessibilityDoc from '@/doc/floatlabel/AccessibilityDoc.vue';
import BasicDoc from '@/doc/floatlabel/BasicDoc.vue';
import ImportDoc from '@/doc/floatlabel/ImportDoc.vue';
import ThemingDoc from '@/doc/floatlabel/theming/index.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'import',
                    label: 'Import',
                    component: ImportDoc
                },
                {
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            themingDoc: ThemingDoc
        };
    }
};
</script>
