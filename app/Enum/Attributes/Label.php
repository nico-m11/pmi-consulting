<?php

	namespace App\Enum\Attributes;

	use Attribute;

	/**
	 *
	 */
	#[Attribute(Attribute::TARGET_CLASS_CONSTANT)]
	class Label
	{
		/**
		 * @param string $label
		 */
		public function __construct(public string $label) {}
	}
