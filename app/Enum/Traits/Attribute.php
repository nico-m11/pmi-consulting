<?php

	namespace App\Enum\Traits;

	  use Illuminate\Support\Str;
    use ReflectionEnumUnitCase;

    /**
	 *
	 */
	trait Attribute
	{
		/**
		 * Ritorna il valore dell'attributo dell'enum, se presente.
		 *
		 * @param string $attributeClass
		 *
		 * @return string

		 */
		final public function getAttribute(string $attributeClass): string
		{
			$enumReflection     = new ReflectionEnumUnitCase($this::class, $this->name);
			$enumLabelAttribute = $enumReflection->getAttributes($attributeClass);

			if (empty($enumLabelAttribute)) {
				throw new \Exception('fail');
			}

			return $enumLabelAttribute[0]->getArguments()[0];
		}

		/**
		 * Ritorna il valore degli attributi dell'enum, se presenti.
		 *
		 * @return array
		 */
		final public function getAttributes(): array
		{
			$enumAttributes = [];
			$enumReflection = new ReflectionEnumUnitCase($this::class, $this->name);

			foreach ($enumReflection->getAttributes() as $enumAttribute) {
				$enumAttributes[Str::afterLast($enumAttribute->getName(), '\\')] = $enumAttribute->getArguments()[0];
			}

			return $enumAttributes;
		}
	}
