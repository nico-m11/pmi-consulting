<?php

	namespace App\Enum\Attributes;

	use Attribute;

	/**
	 *
	 */
	#[Attribute(Attribute::TARGET_CLASS_CONSTANT)]
	class InternalCode
	{
		/**
		 * @param string $internalCode
		 */
		public function __construct(public string $internalCode) {}
	}
